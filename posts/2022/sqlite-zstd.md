---
title: "sqlite-zstd: Transparent dictionary-based row-level compression for SQLite"
subtitle: ""
date: 2022-07-03
hidden: true
---

# Motivation

For my incomplete automatic time-tracking tool [_timetrackrs_](https://github.com/phiresky/timetrackrs), I try to collect a lot of information about my habits for later analysis. The main component collects data from my computer about what programs are open every 30 seconds, but another component for example imports usage data from my phone via [App Usage](https://play.google.com/store/apps/details?id=com.a0soft.gphone.uninstaller).

I store all this data as "events" in an SQLite database, but each event is pretty redundant - for example the open program doesn't change that much. But I still want to store detailed, raw snapshots with the aggregation happening later so I can change the parameters of the analysis without losing any information.

The main events-log SQLite table looks somewhat like this:

| id    | timestamp_unix_ms | data_type           | duration_ms | data                                                                                                                                                             |
| ----- | ----------------- | ------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 52140 | 1616108552527     | app_usage_import_v1 | 17000       | `{"device_type":"Smartphone","app":{"pkg_name":"org.telegram.messenger", "app_name":"Telegram", "app_type":3}, "act_type":200, "act_type_flag":0, "pid":35,...}` |
| 52141 | 1616108009206     | x11_v2              | 30000       | (30kByte json) `{"current_desktop_id": 9, "focused_program": 5, "open_programs": [...}`                                                                          |
| 52142 | 1616107978795     | x11_v2              | 30000       | (30kByte json) `{"current_desktop_id": 2, "focused_program": 17, "open_programs": [...}`                                                                         |

`data` is a json blob from the perspective of SQLite, but it is parsed into a strictly typed structure in the application code.

After a year of collecting data, the SQLite database is already **N GByte** in size. Compressing the whole database file reduces the size by xx%, but that way the data isn't actually queryable. SQLite doesn't have any compression features, so I built my own:

```barchart
title: Size of the database with a year of data
series: MByte (all compression done with zstd level 19)
data:
   sqlite3 file (uncompressed): 100
   sqlite3 file (whole db file compressed, no random access possible): 100
   sqlite3 file (data column compressed normally): 100
   sqlite3 file (sqlite-zstd transparent compression): 100
```

# Compressing data in a database

There's a few solutions I could think of when you have compressible data in your database:

-   Normalize your data as much as possible, bringing it into the [strict normal form](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form). In theory, my above table could be split into dozens of smaller tables that each have no redundancy and perfectly clean relations with each other. This is how you traditionally "should" use a relational database.

    This would reduce the database size because in normal form, my data wouldn't really be all that compressible, it's mostly just compressible because of the way its stored. JSON stores all the same keys every time, and I also store the metadata of every open program again every time. All this could be fixed by normalizing the data. I think the same would apply for a lot of use cases of compressible data in databases. But there's a reason ~~NoSQL~~ NoRelational databases have become popular. For my use case, the main issues would be:

    1. I'd have to duplicate all the structure I already have in my application code in SQL code for no real benefit - Here I always just want to fetch the whole data of one event, and not some smaller parts filtered by some criteria. I also don't want to bother with complex join queries just to get the same information I already
    2. My schema would be come very inflexible. Whenever I add more options or convert some types I'd have to write SQL migrations for it and think about the best way to store the new data.
    3. For extensibility, I might not actually know the exact structure of the data before storing it, for example if it is imported from an external tool.

    So in general I prefer to have a mix of relational structure in the database (where it makes sense) together with denormalized data stored in a text column. This gives me the best mix of flexibility and structure. The popularity of the JSON column type in PostgreSQL shows that I'm not the only one. You could maybe even [reimplement MongoDB using just the PostgreSQL JSON column](https://www.enterprisedb.com/blog/documentdb-really-postgresql).

-   Just store the data compressed individually. On insert, compress(data), on every select decompress it.

    This is easy to implement and easy to use. But it's also not that effective, especially if your column contains JSON data since JSON stores the keys together with the data. Even with compression, these keys still needs to be stored in every row.

    PostgreSQL does something similar for large blobs with its [TOAST storage](https://www.enterprisedb.com/blog/configurable-lz4-toast-compression).

-   Split the database into separate files (for example weekly), then compress the older partitions into single files.

    If you need to access older data, simply decompress the whole week of data to RAM, then read from that database. This would work okay for my use case since it's pretty much append-only time-series data; older data is not read often, and when it is it is read pretty sequentially.

    In SQLite you can attach multiple database files into a single instance using `ATTACH DATABASE`, and then join across tables of the different files.

    This idea is kind of similar to table partitioning and tablespaces in PostgreSQL. There you could put the older partitions on a slower storage device like an HDD with file system level compression enabled.

-   Store the data in a column-oriented fashion. That way you can compress blocks of data much better. This is done in many database systems used for larger scale time-series data with less need for a complex schema.

# Introducing sqlite-zstd

My approach is kind of a mix of column-oriented storage, partitioning, and individual row compression.
SQLite doesn't have any compression capabilities built in. I also don't know of this method being used anywhere else, so it might be interesting to other database systems as well.

The idea is to define a way to split the rows of the table into chunks, then train a `zstd` dictionary for each chunk and compress each row in the chunk with it. When selecting a row, the dictionary is loaded first and the data is decompressed with the dictionary. To improve performance, the least recently used dictionaries are cached, and the compression / chunking happens in a lazy fashion when the database is not busy.

The whole thing is implemented by replacing the table with a view so most of the application code doesn't need any changes.

Example partitioning keys:

| Use case                                   | Partitioning SQL expression                              | Explanation                                                                                   |
| ------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Generic data                               | `round(rowid/10000)`                                     | Compress every 10k inserted rows with the same dictionary                                     |
| Generic time-series data                   | `strftime(created, '%Y-%m')`                             | Compress every month of data together                                                         |
| A limited amount of different data formats | `data_type \|\| '.' \|\| strftime(created, 'weekday 0')` | Compress every data format separately per week (useful if they have very different structure) |
| A write-once, read-often database          | `1`                                                      | all the rows are compressed with the same dictionary                                          |

```
create table compressible(id integer primary key not null, data text);
insert into compressible(data) select
    case abs(random() % 2)
        when true then '{"foobar": "hello world"}'
        when false then '{"yello": "nopify"}'
    end
from generate_series(1, 1000000);
```

## Benchmarks

### Setup

For my use case introduced at the start and for my example, I set the partitioning key per data type and per week, with the current week staying uncompressed.

Before every benchmark, the operating system cache is cleared. The database sits on an SSD drive. (try also hdd?)

### Inserting data

(chart)

The performance of inserting data is almost the same as without `sqlite-zstd`.

### Querying data of the past week

For my use case and probably many other use cases, you have a "hot set" of data that is queried very often, while the rest stays mostly untouched.

### Querying data of a month of older data

Doing an analysis that crosses a few partitions but most of the queries stay within the same partition.

### Completely random access

This is expected to be slower

## Efficiency / Robustness / Features

-   stable compression dicts stored by row
-   allow excluding recent data by returning null from expression
-   supports multiple columns
