---
title: Improving Lemmy Performance
date: 2023-08-27
---

[Lemmy](https://join-lemmy.org/) is a federated social news aggregator and discussion site. It's basically to Reddit what [Mastodon](https://joinmastodon.org/) is to Twitter.

Lemmy has been in development for over three years by the two core maintainers, but has always been a kind of niche project. In the past few months the [user count has exploded](https://lemmy.fediverse.observer/stats). There are now over a thousand instances and 50 thousand active monthly users.

When Reddit announced their strong actions against moderators and third-party apps in June 2023 is also when I got interested in Lemmy. I've since become a co-maintainer of Lemmy, still mostly working on improving the backend performance. This post is about my personal experience, not any official information.

But with the sudden surge of users a lot of problems also started popping up. Page load times started going up into the seconds, instances started going down for large amounts of time, federation started becoming flaky with different instances [showing very different vote and comment counts](https://github.com/LemmyNet/lemmy/issues/3101).

# The base technology

The Lemmy server is written in Rust, using PostgreSQL as its database. The client uses Next.js with React. These are all technologies with a very proven track record for high performance and scalability. So how come Lemmy was having such troubles with a measly few dozens or hundred users concurrently active on an instance? I was intruiged.

# The low hanging fruit

Lemmy has tests for fairly large parts of the backend code, but the first problems that started appearing were mostly not due to correctness, but due to just unoptimized or redundant code. Lemmy had never had to handle this level of traffic, so suddenly code that had never been an issue started causing ever compounding issues.

> O(n^2) is the sweet spot of badly scaling algorithms: fast enough to make it into production, but slow enough to make things fall down once it gets there - [Bruce Dawson](https://twitter.com/BruceDawson0xB/status/1120381406700429312)

## Fetching redundant data

The [first large issue](https://github.com/LemmyNet/lemmy/pull/3482) I identified was a single query: `CommunityFollowerView::for_community`. Whenever a user does a action on Lemmy (post a post, comment, like / dislike something), that action has to be federated to all interested users on other instances. Federation is done with ActivityPub. Since that is in its core really simple, here's a visual of how ActivityPub federation works:

![Activitypub subscribe + fetch POST](./activitypub-simple.drawio.svg)

there is an SQL query fetching all followers of the

## Compounding issues

PG Pool size

# Open issues

## The gap between users, instance admins, and developers

## The social aspect

-   recruiting devops lemmy.world
-   no paid
-   volunteers
-   pulling in different directions

## Activitypub itself?
