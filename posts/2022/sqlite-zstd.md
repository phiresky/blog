---
title: "sqlite-zstd: Transparent dictionary-based row-level compression for SQLite"
subtitle: ""
date: 2022-07-03
hidden: true
---

## Motivation

For my incomplete automatic time-tracking tool [_timetrackrs_](https://github.com/phiresky/timetrackrs), I try to collect a lot of information about my habits for later analysis. The main component collects data from my computer about what programs are open every 30 seconds, but another component for example imports usage data from my phone via [App Usage](https://play.google.com/store/apps/details?id=com.a0soft.gphone.uninstaller).

I store all this data as "events" in an SQLite database, but each event is pretty redundant - for example the open program doesn't change that much. But I still want to store detailed, raw snapshots with the aggregation happening later so I can change the parameters of the analysis without losing any information.

The main events-log SQLite table looks somewhat like this:

| id    | timestamp_unix_ms | data_type           | data                                                                                                                                                             |
| ----- | ----------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 52140 | 1616108552527     | app_usage_import_v1 | `{"device_type":"Smartphone","app":{"pkg_name":"org.telegram.messenger", "app_name":"Telegram", "app_type":3}, "act_type":200, "act_type_flag":0, "pid":35,...}` |
| 52141 | 1616108009206     | x11_v2              | (30kByte json) `{"current_desktop_id": 9, "focused_program": 5, "open_programs": [...}`                                                                          |
| 52142 | 1616107978795     | x11_v2              | (30kByte json) `{"current_desktop_id": 2, "focused_program": 17, "open_programs": [...}`                                                                         |

`data` is a json blob from the perspective of SQLite, but it is parsed into a strictly typed structure in the Rust application code.

After a year of collecting data, the SQLite database is already **7.6 GByte** in size.

Of course this is an extreme example of redundancy, but storing similar redundant data into databases is pretty common. SQLite doesn't have any compression features, so I built my own:

```barchart
title: Size of 7 million titles from IMDb stored as JSON in sqlite3
subtitle: All compression done with zstd level 19
nossr: true
series: File size
height: 300
categoryWidth: 200
xUnit: MB
data:
   Uncompressed DB: 2130
   Each row compressed individually: 1634
   sqlite-zstd transparent compression: 553
   Whole DB file compressed (no random access possible): 202
```

Compressing the whole database file reduces the size by _90%_, but that way the data isn't actually queryable. Compressing the data in the application code before storing it in the database reduces the size by only _23%_.

My sqlite extension reduces the size by _75%_ without modification to the application code and while retaining all normal querying capabilities.

## Options for compressing data in a database

There's a few solutions I could think of when you have compressible data in your database:

1.  Normalize your data as much as possible, bringing it into the [strict normal form](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form). In theory, my above table could be split into dozens of smaller tables that each have no redundancy and perfectly clean relations with each other. This is how you traditionally "should" use a relational database.

    This would reduce the database size because in normal form, my data wouldn't really be all that compressible, it's mostly just compressible because of the way its stored. JSON stores all the same keys every time, and I also store the metadata of every open program again every time. All this could be fixed by normalizing the data. I think the same would apply for a lot of use cases of compressible data in databases. But there's a reason ~~NoSQL~~ NoRelational databases have become popular. For my use case, the main issues would be:

    -   I'd have to duplicate all the structure I already have in my application code in SQL code for no real benefit - Here I always just want to fetch the whole data of one event, and not some smaller parts filtered by some criteria. I also don't want to bother with complex join queries just to get the same information I already
    -   My schema would be come very inflexible. Whenever I add more options or convert some types I'd have to write SQL migrations for it and think about the best way to store the new data.
    -   For extensibility, I might not actually know the exact structure of the data before storing it, for example if it is imported from an external tool.

    So in general I prefer to have a mix of relational structure in the database (where it makes sense) together with denormalized data stored in a text column. This gives me the best mix of flexibility and structure. The popularity of the JSON column type in PostgreSQL shows that I'm not the only one. You could maybe even [reimplement MongoDB using just the PostgreSQL JSON column type](https://www.enterprisedb.com/blog/documentdb-really-postgresql).

2.  Just store the data compressed individually. On insert, `compress(data)`, on every select decompress it.

    This requires some application code change but is easy to implement and easy to use. But it's also not that effective, especially if your column contains JSON data since JSON stores the dictionary keys together with the values. Even with compression, these keys will still needs to be stored in every row.

    PostgreSQL does something similar for large blobs with its [TOAST storage](https://www.enterprisedb.com/blog/configurable-lz4-toast-compression).

3.  Split the database into separate files (for example weekly), then compress the older partitions into single files.

    If you need to access older data, simply decompress the whole week of data to RAM, then read from that database. This would work okay for my use case since it's pretty much append-only time-series data; older data is not read often, and when it is it is read pretty sequentially.

    In SQLite you can attach multiple database files into a single instance using `ATTACH DATABASE`, and then join across tables of the different files.

    This idea is kind of similar to table partitioning and tablespaces in PostgreSQL. There you could put the older partitions on a slower storage device like an HDD with file system level compression enabled.

4.  Store the data in a column-oriented fashion. That way you can compress blocks of data much better. This is done in many database systems used for larger scale time-series data with less need for a complex schema, such as InfluxDB or ClickHouse.

5.  Do some weird mix of the above. My solution falls into this category. Another example of a weird mix would be [timescaledb](https://docs.timescale.com/timescaledb/latest/how-to-guides/compression/about-compression/), which from what I understand does compression by converting data to a semi column-oriented format in chunks, then storing those chunks inside single rows in the row-oriented PostgreSQL table.

# Introducing sqlite-zstd

My approach is kind of a mix of column-oriented storage, partitioning, and individual row compression.
I don't know of this method being used anywhere else (please let me know), so it might be interesting to other database systems as well. The whole thing should work just as well for PostgreSQL.

The idea is to define a way to split the rows of the table into chunks, then train a `zstd` dictionary for each chunk and compress each row in the chunk with it. When selecting a row, the dictionary is loaded first and the data is decompressed with the dictionary. To improve performance, the least recently used dictionaries are cached, and the compression / chunking happens in a lazy fashion when the database is not busy.

The whole thing is implemented by replacing the table with a view so most of the application code doesn't need any changes.

## How to use it

First, you take your database and load SQLite with the extension:

```bash
$ ls -lh imdb.sqlite3
-rw-r--r-- 2.0G imdb.sqlite3
$ sqlite3 -header imdb.sqlite3 'select * from title_basic limit 1'
id|data
1|{"tconst":"tt0000001","titleType":"short",
   "primaryTitle":"Carmencita","originalTitle":"Carmencita",
   "isAdult":0,"startYear":"1894","endYear":null,
   "runtimeMinutes":"1","genres":["Documentary", "Short"]}
```

Then you enable transparent compression:

```sql
$ sqlite3 -header imdb.sqlite3 -cmd ".load libsqlite_zstd.so"
select zstd_enable_transparent('{"table": "events",
    "column": "data", "compression_level": 19,
    "dict_chooser": "''i.'' || (id / 1000000)"}');
select zstd_incremental_maintenance(null, 1);
vacuum; -- clean up space
```

And your database is smaller!

```bash
$ ls -lh imdb.sqlite3
-rw-r--r-- 528M imdb.sqlite3
```

While querying still works just fine:

```bash
$ sqlite3 -header imdb.sqlite3 -cmd '.load libsqlite_zstd.so' 'select * from title_basic limit 1'
id|data
1|{"tconst":"tt0000001","titleType":"short",
   "primaryTitle":"Carmencita","originalTitle":"Carmencita",
   "isAdult":0,"startYear":"1894","endYear":null,
   "runtimeMinutes":"1","genres":["Documentary", "Short"]}
```

## How it works

The `select zstd_enable_transparent` converts the table into a view. `dict_chooser` is an SQL expression that decides how to partition the data. Example partitioning keys:

| Use case                                   | Partitioning SQL expression                        | Explanation                                                                                   |
| ------------------------------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Generic data                               | `rowid/100000`                                     | Compress every 100k inserted rows with the same dictionary                                    |
| Generic time-series data                   | `strftime(created, '%Y-%m')`                       | Compress every month of data together                                                         |
| A limited amount of different data formats | `data_type ‖ '.' ‖ strftime(created, 'weekday 0')` | Compress every data format separately per week (useful if they have very different structure) |
| A write-once, read-often database          | `'a'`                                              | all the rows are compressed with the same dictionary                                          |

For real world use cases you might want a more complex key, for example one that keeps the "hot set" of data (e.g. the current week) uncompressed.

Internally, this will do the following:

1. It validates the given configuration including the dict_chooser expression, then stores it in a table `_zstd_config`
2. It renames the table and adds a dictionary_id column somewhat like this:

    ```sql
    alter table events rename to _events_zstd;
    alter table _events_zstd add column _data_dict integer
        default null references _zstd_dicts(id);
    create index on _events_zstd (_data_dict);
    ```

3. It creates a view to replace the original table somewhat like this:

    ```sql
    create view events as
        select id, col2, ...,
            zstd_decompress_col(data, 1, _data_dict, true) as data
        from _events_zstd;

    create trigger events_insert_trigger
        instead of insert on events
        for each row
        begin
            insert into _events_zstd(id, ..., _data_dict, data) select
                new.id,
                ...,
                null as _data_dict,
                new.data;
        end;
    create trigger events_update_trigger ...;
    create trigger events_delete_trigger ...;
    ```

    The view calls the `zstd_decompress_col()` function, which decompresses the the given data with a dictionary stored in the \_zstd_dicts table. The triggers basically just forward the UPDATE / INSERT queries to the backing table, addingt he \_data_dict column as NULL (meaning uncompressed).

The `zstd_enable_incremental` function doesn't actually compress anything though, it just sets everything up.

To actually compress the data, you start the compression while your database is not too busy:

```sql
select zstd_incremental_maintenance(60, 1);
```

The first parameter is the maximum duration of the maintenance in seconds, the second is the maximum average database load (0 to 1).

The maintenance does the following:

1.  Check all tables with enabled compression for data that is not compressed (\_data_dict is NULL)
2.  For every found row, group the data by the chosen dictionary key, then for every chosen dictionary key:

    1. If the dictionary with this key doesn't exist yet, train a new dictionary based on a sample of the data and insert it into `_zstd_dicts`.
    2. Split the rows into a chunk with a heuristic so each chunk takes will take less than one second to process.
    3. For each chunk, compress the data in the chunk in one transaction. This ensures the function can be interrupted / killed at any time.
    4. If the given database load is reached, wait. If the given time limit is reached, stop. This ensures the database stays functional during the maintenance.

## Performance Benchmarks

### Setup

For testing (including the chart above), I used the imdb `title.basics.tsv` file https://datasets.imdbws.com/title.basics.tsv.gz imported such that all the data is stored in a single JSON column. ^[For this simple example it would be probably smarter to insert every column into a separate SQLite column since the schema is simple. Note that the same database with separate columns was 855 MByte though, while the transparently compressed JSON database is only 433 MByte]

The code to create the test databases and run the benchmark is [here](https://github.com/phiresky/sqlite-zstd/tree/master/src/bin/). Before every benchmark, the operating system cache is cleared.

### Selecting data sequentially.

```barchart
title: Fetch 1000 sequential values starting from a random ID
subtitle: iterations/s, higher is better
nossr: true
series:
    - name: uncompressed
      key: uncompressed
    - name: sqlite-zstd (no dict)
      key: sqlite-zstd (no dict)
    - name: sqlite-zstd (dictionary-based)
      key: sqlite-zstd (dictionary-based)
height: 300
xUnit: it/s
data:
    - name: RAM
      sqlite-zstd (no dict): 219589
      sqlite-zstd (dictionary-based): 298836
      uncompressed: 464941
    - name: SSD
      sqlite-zstd (no dict): 180897
      sqlite-zstd (dictionary-based): 245724
      uncompressed: 313228
    - name: HDD
      sqlite-zstd (no dict): 27607
      sqlite-zstd (dictionary-based): 23340
      uncompressed: 37291
```

For my use case and probably many other use cases, you have a "hot set" of data that is queried very often, while the rest stays mostly untouched.

### Selecting data randomly

```barchart
title: Fetch 1000 rows with randomly chosen IDs
subtitle: iterations/s, higher is better
nossr: true
series:
    - name: uncompressed
      key: uncompressed
    - name: sqlite-zstd (no dict)
      key: sqlite-zstd (no dict)
    - name: sqlite-zstd (dictionary-based)
      key: sqlite-zstd (dictionary-based)
height: 300
xUnit: it/s
data:
    #- name: RAM
    #  sqlite-zstd (no dict): 138304
    #  sqlite-zstd (dictionary-based): 159144
    #  uncompressed: 202466
    - name: SSD
      sqlite-zstd (no dict): 1976
      sqlite-zstd (dictionary-based): 2543
      uncompressed: 1900
    - name: HDD
      sqlite-zstd (no dict): 92
      sqlite-zstd (dictionary-based): 127
      uncompressed: 86
```

Doing an analysis that crosses a few partitions but most of the queries stay within the same partition.

### Inserting new data

```barchart
title: Inserting 1000 new rows with random values in one transaction
subtitle: higher is better
nossr: true
xUnit: it/s
series:
    - name: uncompressed
      key: uncompressed
    - name: sqlite-zstd (no dict)
      key: sqlite-zstd (no dict)
    - name: sqlite-zstd (dictionary-based)
      key: sqlite-zstd (dictionary-based)
height: 300
data:
    #- name: RAM
    #  sqlite-zstd (no dict): 401776
    #  sqlite-zstd (dictionary-based): 407841
    #  uncompressed: 1281047
    - name: SSD
      sqlite-zstd (no dict): 105460
      sqlite-zstd (dictionary-based): 104604
      uncompressed: 136876
    - name: HDD
      sqlite-zstd (no dict): 3607
      sqlite-zstd (dictionary-based): 3932
      uncompressed: 3960
```

The performance of inserting data is almost the same as without `sqlite-zstd`.

### Updating sequential rows

```barchart
title: Update 1000 sequential rows with a random new value
subtitle: higher is better
nossr: true
series:
    - name: uncompressed
      key: uncompressed
    - name: sqlite-zstd (no dict)
      key: sqlite-zstd (no dict)
    - name: sqlite-zstd (dictionary-based)
      key: sqlite-zstd (dictionary-based)
height: 300
xUnit: it/s
data:
    #- name: RAM
    #  sqlite-zstd (no dict): 101294
    #  sqlite-zstd (dictionary-based): 107887
    #  uncompressed: 901736
    - name: SSD
      sqlite-zstd (no dict): 50102
      sqlite-zstd (dictionary-based): 35380
      uncompressed: 44357
    - name: HDD
      sqlite-zstd (no dict): 2933
      sqlite-zstd (dictionary-based): 2549
      uncompressed: 4126
```

### Updating random rows

```barchart
title: Update 1000 random rows with a random new value
subtitle: iterations/s, higher is better
nossr: true
series:
    - name: uncompressed
      key: uncompressed
    - name: sqlite-zstd (no dict)
      key: sqlite-zstd (no dict)
    - name: sqlite-zstd (dictionary-based)
      key: sqlite-zstd (dictionary-based)
height: 300
xUnit: it/s
data:
    #- name: RAM
    #  sqlite-zstd (no dict): 24991
    #  sqlite-zstd (dictionary-based): 19802
    #  uncompressed: 108240
    - name: SSD
      sqlite-zstd (no dict): 1286
      sqlite-zstd (dictionary-based): 1519
      uncompressed: 6058
    - name: HDD
      sqlite-zstd (no dict): 50
      sqlite-zstd (dictionary-based): 60
      uncompressed: 72
```

## Data size benchmarks

For the example above, this extension is pretty effective. One GitHub someone mentioned they were using it for a private dataset on Android devices to great success:

> I can't say it in detail, but I have a 800M database, after using this extension, the database's size shrink to 72M.
> That's enough for us to find a way to using this extension on mobile device. [source](https://github.com/phiresky/sqlite-zstd/issues/7)

Please let me know if you have another use case ;)

## Why it works well

-   zstd nomagic mode
-   stable compression dicts stored by row
-   allow excluding recent data by returning null from expression
-   supports multiple columns
-   dictionary is cached
-   incremental_maintenance
    -   max duration
    -   db_load
    -   computed chunk size by compression speed
-   heuristics for dictionary size, sampling

## Why it doesn't work well

-   zstd is not optimized for tiny data
-   huge data doesn't really improve much

-   indexes into compressed data are not supported

    In theory you can index values within a JSON data structure using

    `CREATE INDEX startyearidx on _title_basics_zstd(zstd_decompress_col(data, 1, _data_dict, true)->>'startYear');`

    And this index is used fine when querying \_title_basics_zstd directly. But when querying the `data` column in the view, the index is not used:

    ```
    sqlite> explain query plan select * from title_basics where data->>'startYear' == '1992' limit 1;
    QUERY PLAN
    `--SCAN _title_basics_zstd
    ```

    This sadly seems to be a limitation of SQLite, even though it does pass down other normal indexable WHEREs.
