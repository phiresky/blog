---
title: "SQLite performance tuning"
subtitle: "Scaling SQLite databases to many concurrent readers and multiple gigabytes while maintaining 100k SELECTs per second"
date: 2020-06-26
hidden: false
updated: 2021-05-05
---

SQLite is an embedded SQL database. It's extremely easy to setup, buildable as a single C file with libraries existing for basically all common programming languages. It doesn't need any server setup or configuration since the SQL logic is run in the host process, and the database consists of only two files you can easily copy or move around. You can still connect to and query the same database concurrently with multiple processes, though only one write operation can happen at the same time.

SQLite is often seen as a toy database only suitable for databases with a few hundred entries and without any performance requirements, but you can scale a SQLite database to multiple GByte in size and many concurrent readers while maintaining high performance by applying the below optimizations.

## Run these every time you connect to the DB

Some of these are applied permanently, but others are reset on new connection, so it's recommended to run all of these each time you connect to the database.

-   Journal Mode

    ```sql
    pragma journal_mode = WAL;
    ```

    Instead of writing changes directly to the db file, write to a write-ahead-log instead and regularily commit the changes. This allows multiple concurrent readers even during an open write transaction, and can significantly improve performance.

-   Synchronous Commit

    ```sql
    pragma synchronous = normal;
    ```

    or even `synchronous=off`. The default is `full`, which means every single update has to wait for [FSYNC](<https://en.wikipedia.org/wiki/Sync_(Unix)>). Normal is still completely corruption safe in WAL mode, and means only WAL checkpoints have to wait for FSYNC. Off can cause db corruption, though I've never had problems. See here: https://www.sqlite.org/pragma.html#pragma_synchronous

-   Temporary files location

    ```sql
    pragma temp_store = memory;
    ```

    Stores temporary indices / tables in memory. sqlite automatically [creates temporary indices](https://www.sqlite.org/tempfiles.html#transient_indices) for some queries. Not sure how much this one helps. If your SQLite is creating temporary indices (check with `EXPLAIN QUERY PLAN`) you should probably create those indexes yourself in any case.

-   Enable memory mapping

    ```sql
    pragma mmap_size = 30000000000;
    ```

    Uses memory mapping instead of read/write calls when the database is < mmap_size in bytes. Less syscalls, and pages and caches will be managed by the OS, so the performance of this depends on your operating system. Note that it will not use the amount of physical memory, it will just reserve virtual memory. The OS will then decide which pages are evicted and which stay in memory based on its usual "disk caching" logic. Should be much faster, at least on Linux and if you have a fair amount of memory for your SQLite process. If your database is larger than the given mmap_size, the first part of the database will still be memory mapped, the rest will be handled with read() / write() syscalls.

    If you are on a 32-bit system you can probably only set this to less than $2^{32}$ bytes since the size of the virtual memory space is limited.

    Memory mapping can also have implications when there are I/O errors, see [the official documentation](https://sqlite.org/mmap.html).

-   Increase the page size

    ```sql
    pragma page_size = 32768;
    ```

    This improved performance and db size a lot for me in one project, but it's probably only useful if you are storing somewhat large blobs in your database and might not be good for other projects where rows are small. For writing queries SQLite will always only replace whole pages, so this increases the overhead of write queries.

### Summary

If you're too lazy to read all the above, just run this on every database connect:

```sql
pragma journal_mode = WAL;
pragma synchronous = normal;
pragma temp_store = memory;
pragma mmap_size = 30000000000;
```

## More things that must be run manually

-   Reorganize the database

    ```sql
    pragma vacuum;
    ```

    Run once to completely rewrite the db. Very expensive if your database is 100MB+.

-   Re-analyze the database

    ```sql
    pragma optimize;
    ```

    > To achieve the best long-term query performance without the need to do a detailed engineering analysis of the application schema and SQL, it is recommended that applications run "PRAGMA optimize" (with no arguments) just before closing each database connection. Long-running applications might also benefit from setting a timer to run "PRAGMA optimize" every few hours.
    > [<https://www.sqlite.org/pragma.html#pragma_optimize>]{.source}

-   Vacuum the database

    ```sql
    pragma auto_vacuum = incremental; -- once on first DB create
    pragma incremental_vacuum; -- regularily
    ```

    Probably not useful unless you expect your DB to shrink significantly regularily.

    > The freelist pages are moved to the end of the database file and the database file is truncated to remove the freelist pages [...]. Note, however, that auto-vacuum only truncates the freelist pages from the file. Auto-vacuum does not defragment the database nor repack individual database pages the way that the VACUUM command does. In fact, because it moves pages around within the file, auto-vacuum can actually make fragmentation worse.
    > [<https://www.sqlite.org/pragma.html#pragma_incremental_vacuum>]{.source}

## Regarding WAL mode

WAL mode has some issues where depending on the write pattern, the WAL size can grow to infinity, slowing down performance a lot. I think this usually happens when you have lots of writes that lock the table so sqlite never gets to [doing wal_autocheckpoint](https://www.sqlite.org/wal.html#ckpt). There's a few ways to mitigate this:

1. Reduce [wal_autocheckpoint interval](https://www.sqlite.org/pragma.html#pragma_wal_autocheckpoint). No guarantees since all autocheckpoints are passive.
2. Run `pragma wal_checkpoint(full)` or `pragma wal_checkpoint(truncate)` sometimes. With `full`, the WAL file won't change size if other processes have the file open but still commit everything so new data will not cause the WAL file to grow. If you run `truncate` it will block other processes and reset the WAL file to zero bytes. Note that you _can_ run these from a separate process.
