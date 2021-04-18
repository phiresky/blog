---
title: "Hosting SQLite databases on Github Pages"
subtitle: "(or any static file hoster)"
date: 2021-04-17
hidden: true
---

I was writing [a tiny website to display statistics of how much sponsored content a Youtube creator has over time](https://phiresky.github.io/youtube-sponsorship-stats/?uploader=Adam+Ragusea) when I noticed that I often write a small tool as a website that queries some data from a database and then displays it in a graph, a table or similar. But if you want to use a database, you either need to write a backend (which you then need to host forever) or download the whole dataset into the browser (which is not so great when the dataset is 100MB).

In the past when I've used a backend server for these small side projects at some point some API goes down or a key expires or I forget about the backend and stopped paying for whatever VPS it was on. Then when I revisit it years later, I'm annoyed that it's gone and curse myself for relying on some external service (or myself caring over a longer period of time).

Hosting a static website is much easier in comparison to a backend server - there's many free and reliable options (like GitHub or GitLab Pages), and it scales to basically infinity (when backed with a CDN) without any effort.

So I wrote a tool to be able to use an SQL database in a statically hosted website!

Here's a demo using the [World Development Indicators dataset](https://github.com/phiresky/world-development-indicators-sqlite/) - a dataset with 6 tables and over 8 million rows (600MByte total).

```{.sqlite-httpvfs-demo .autorun}
select country_code, long_name from wdi_country
    order by random() limit 3;
```

Note that this website is 100% hosted on GitHub Pages - which is a static file hoster.

So how do you use a database on a static
