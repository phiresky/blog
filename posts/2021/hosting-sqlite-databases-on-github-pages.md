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

```{.sqlite-httpvfs-demo .autorun .diffstat .logPageReads}
select country_code, long_name from wdi_country limit 3;
```

As you can see, we can query the `wdi_country` table while only using 33kB of data!

This is a full SQLite query engine. As such, we can use e.g. the [JSON functions](https://www.sqlite.org/json1.html) on our database:

```sqlite-httpvfs-demo
select json_extract('{"foo": {"bar": 123}}', '$.foo.bar') as value
```

Note that this website is 100% hosted on a static file hoster (GitHub Pages).

So how do you use a database on a static

```{.sqlite-httpvfs-demo .diffstat .logPageReads}
select indicator_code from wdi_series where indicator_name = 'Literacy rate, youth total (% of people ages 15-24)'
```

A more complex query:

```{.sqlite-httpvfs-demo .diffstat .logPageReads}
with newest_data as (
  select country_code, indicator_code, max(year) as year from wdi_data
  where
    indicator_code = (select indicator_code from wdi_series where indicator_name = 'Literacy rate, youth total (% of people ages 15-24)')
    and year > 2010
    group by country_code
)
select c.long_name as country, printf('%.1f %%', value) as "Youth Literacy Rate"
from wdi_data, newest_data
  join wdi_country c on c.country_code = wdi_data.country_code
where wdi_data.indicator_code = newest_data.indicator_code and wdi_data.country_code = newest_data.country_code and wdi_data.year = newest_data.year
order by value asc limit 20
```

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
