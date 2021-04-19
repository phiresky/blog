---
title: "Hosting SQLite databases on Github Pages"
subtitle: "(or any static file hoster)"
date: 2021-04-17
hidden: true
---

I was writing [a tiny website to display statistics of how much sponsored content a Youtube creator has over time](https://phiresky.github.io/youtube-sponsorship-stats/?uploader=Adam+Ragusea) when I noticed that I often write a small tool as a website that queries some data from a database and then displays it in a graph, a table, or similar. But if you want to use a database, you either need to write a backend (which you then need to host forever) or download the whole dataset into the browser (which is not so great when the dataset is more than 10MB).

In the past when I've used a backend server for these small side projects at some point some API goes down or a key expires or I forget about the backend and stop paying for whatever VPS it was on. Then when I revisit it years later, I'm annoyed that it's gone and curse myself for relying on some external service (or myself caring over a longer period of time).

Hosting a static website is much easier than a backend server - there's many free and reliable options (like GitHub, GitLab Pages, Netlify, etc), and it scales to basically infinity without any effort.

So I wrote a tool to be able to use an SQL database in a statically hosted website!

Here's a demo using the [World Development Indicators dataset](https://github.com/phiresky/world-development-indicators-sqlite/) - a dataset with 6 tables and over 8 million rows (600MByte total).

```{.sqlite-httpvfs-demo .autorun .diffstat}
select country_code, long_name from wdi_country limit 3;
```

As you can see, we can query the `wdi_country` table while only using 33kB of data!

This is a full SQLite query engine. As such, we can use e.g. the [JSON functions](https://www.sqlite.org/json1.html) on our database:

```{.sqlite-httpvfs-demo .autorun}
select json_extract('{"foo": {"bar": 123}}', '$.foo.bar') as value
```

Note that this website is 100% hosted on a static file hoster (GitHub Pages).

So how do you use a database on a static file hoster?
Firstly, SQLite is compiled to WebAssembly. SQLite can be compiled with EMScripten without any modifications, and the [sql.js](https://github.com/sql-js/sql.js/) library is a thin JS wrapper around the wasm code.

sql.js only allows you to create and read from databases that are fully in memory though - so I implemented a virtual file system that fetches chunks of the database with HTTP Range requests when SQLite tries to read from the filesystem. From SQLite's perspective, it just looks like it's living on a normal computer with an empty filesystem except for a file called `/wdi.sqlite3` that it can read from.

[info about pages / page sizes]

Here's an example of a simple index lookup query:

```{.sqlite-httpvfs-demo .diffstat .logPageReads .defaultPageReadTable}
select indicator_code from wdi_series where indicator_name
    = 'Literacy rate, youth total (% of people ages 15-24)'
```

Run the above query and look at the page read log. SQLite does 7 page reads for that query.

-   Three page reads are just schema reads (that are already cached)
-   Two page reads are the index lookup in the index `on wdi_series (indicator_name)`
-   Two page reads are on the `wdi_series` table data.

Both the index as well as the table reads are B-Tree lookups.

A more complex query: What are countries with the lowest youth literacy rate, based on the newest data from after 2010?

```{.sqlite-httpvfs-demo .diffstat .logPageReads}
with newest_datapoints as (
  select country_code, indicator_code, max(year) as year from wdi_data
  join wdi_series using (indicator_code)
  where
    indicator_name = 'Literacy rate, youth total (% of people ages 15-24)'
    and year > 2010
  group by country_code
)
select c.long_name as country, printf('%.1f %%', value) as "Youth Literacy Rate"
from wdi_data
  join wdi_country c using (country_code)
  join newest_datapoints using (indicator_code, country_code, year)
order by value asc limit 10
```

The above query should do around 30 GET requests, fetching a total of 200KiB.

```{.sqlite-httpvfs-demo .diffstat .logPageReads}
select sum(length(long_definition)) from wdi_series;
```

```{.sqlite-httpvfs-demo .diffstat .logPageReads}
select snippet(indicator_search, -1, '[[', ']]', ' [...] ', 32) as snippet, * from indicator_search
where indicator_search match 'educatio*'
order by rank
limit 10
```

```{.sqlite-httpvfs-demo}
insert into dom (parent, tagName, textContent)
    select 'ul#outtable1', 'li', long_name
    from wdi_country
```

Output:

<ul id="outtable1"></ul>
