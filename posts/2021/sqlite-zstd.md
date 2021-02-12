---
title: "sqlite-zstd: Transparent row-level compression for SQLite"
subtitle: ""
date: 2021-01-24
hidden: true
---

For my [incomplete time-tracking tool](https://github.com/phiresky/timetrackrs), I store snapshots of the windows I have open in order to later analyze what I spend my time on. This data is pretty redundant - the open program doesn't change that much, but I still want a snapshot every 30 seconds. ~~Story~~?

There's a few solutions I could think of when you have compressible data in your database:

-   Just store the data compressed individually. On insert, compress(data), on every select decompress it.

    This is easy to implement and easy to use. But it's also not that effective, especially if your column contains JSON data since JSON stores the keys together with the data, separately in every row.

-   Split the database into separate files (for example weekly), then compress the older partitions into single files.

    If you need to access older data, simply decompress the whole week of data to RAM, then read from that database. This would work okay for my use case since it's pretty much append-only time-series data; older data is not read often, and when it is it is read pretty sequentially.

    This idea is kind of similar to table partitioning and tablespaces in PostgreSQL. In SQLite you can attach multiple database files into a single instance using `ATTACH DATABASE`, and then join across tables of the different files.

create table compressible(id integer primary key not null, data text);
insert into compressible(data) select
case abs(random() % 2)
when true then '{"foobar": "hello world"}'
when false then '{"yello": "nopify"}'
end
from generate_series(1, 1000000);
