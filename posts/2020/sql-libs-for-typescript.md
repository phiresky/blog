---
title: "An overview of SQL libraries for TypeScript"
date: 2020-06-27
hidden: true
---

Using relational databases in a typed language is a pain unless you have great libraries to support you. There's a lot of different libraries for TypeScript, but they all have their own advantages and flaws. Since it's hard to find anything other than TypeORM, this is an overview of the possibilities.

This is complete overview of SQL libraries for TypeScript. If I'm missing a library, please let me know.

## Object Relation Mappers (ORMs)

In an ORM you declare the schema completely in the host language (TypeScript). The ORM then completely manages synchronization between your objects / classes and the corresponding database tables.

I'm not a huge fan of ORMs since they always have the same issues: If you have somewhat complex queries, you will get to the limit of the ORM and not be able to represent that query in it without escape hatching. You also lose direct control over how the queries are handled, and thus may get surprising performance issues when the ORM uses suboptimal SQL queries in the background.

-   https://github.com/typeorm/typeorm

    By far the most popular solution.

-   https://github.com/mikro-orm/mikro-orm

    Seems pretty nice. There's a comparison between the two [here](https://github.com/mikro-orm/mikro-orm/issues/12)

## Query Builder / ORM combinations

These all connect to a dev instance of the database at compile time or in a preprocessing step to figure out the database schema and create the TypeScript types and/or code for it.

-   https://github.com/prisma/prisma

    A mix of a query builder and an ORM. Schemas are extracted from a dev instance of the database, which then generates TypeScript code to interact with the database. Very good docs, well thought out.

-   https://github.com/jawj/zapatos

    Schemas are extracted from a dev instance of the database. Simple queries (Select, update, insert, each with simple joins) are fully typed with a query-builder like interface. More complex queries are done with raw SQL by manually connecting the schema types with the queries. PostgreSQL only.

-   https://github.com/adelsz/pgtyped

    Reads raw SQL queries, and figures out the TypeScript input and return types for them by connecting to a dev instance of the database and asking it to interpret the query. Thus it is very flexible while still being statically typed. PostgreSQL only.

## Fully Typed Query builders

For these you declare your tables in TypeScript, and write your queries in TypeScript in a way that is as similar as possible to raw SQL.

The library is then able to (ab)use the TypeScript type system to infer the return types of any type of complex query.

All of these have performance issues and regression issues, since the TS compiler is not optimized for very complex operations, and TS is not backwards compatible, so these libraries often break when a new TS version is released.

-   https://github.com/phiresky/ts-typed-sql

    Works well, but unmaintained and missing some SQL features.

-   https://github.com/AnyhowStep/tsql

    Probably the most well thought out, but incomplete.

-   https://github.com/Ff00ff/mammoth

    The most production ready, but limited to PostgreSQL.

-   https://github.com/travigd/vulcyn

    PostgreSQL only, incomplete.

-   https://github.com/hoeck/typesafe-query-builder

    PostgreSQL only, looks good but did not try.
