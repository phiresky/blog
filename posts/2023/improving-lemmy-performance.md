---
title: Improving Lemmy Performance
date: 2023-08-27
---

[Lemmy](https://join-lemmy.org/) is an open-source federated social news aggregator and discussion site. It's basically to Reddit what [Mastodon](https://joinmastodon.org/) is to Twitter.

Lemmy has been in development for over three years by the two core maintainers, but has always been a kind of niche project. In the past few months the [user count has exploded](https://lemmy.fediverse.observer/stats). There are now over a thousand instances and 50 thousand active monthly users.

When Reddit announced their strong actions against moderators and third-party apps in June 2023 is also when I got interested in Lemmy. I've since become a co-maintainer of Lemmy, still mostly working on improving the backend performance. This post is about my personal experience, not any official information.

But with the sudden surge of users a lot of problems also started popping up. Page load times started going up into the seconds, instances started going down for large amounts of time, federation started becoming flaky with different instances [showing very different vote and comment counts](https://github.com/LemmyNet/lemmy/issues/3101).

# The base technology

The Lemmy server is written in Rust, using PostgreSQL as its database. The client uses Next.js with React. These are all technologies with a very proven track record for high performance and scalability. So how come Lemmy was having such troubles with a measly few dozens or hundred users concurrently active on an instance? I was intruiged.

# The low hanging fruit

Lemmy has tests for fairly large parts of the backend code, but the first problems that started appearing were mostly not due to correctness, but due to just unoptimized or redundant code. Lemmy had never had to handle this level of traffic, so suddenly code that had never been an issue started causing ever compounding issues.

> O(n^2) is the sweet spot of badly scaling algorithms: fast enough to make it into production, but slow enough to make things fall down once it gets there - [Bruce Dawson](https://twitter.com/BruceDawson0xB/status/1120381406700429312)

## ActivityPub Refresher

Federation is done with [ActivityPub](https://activitypub.rocks/). Since in its core AP is really simple, so here's a visual of how ActivityPub federation works:

![Activitypub subscribe + fetch POST](./activitypub-simple.drawio.svg)\

## Fetching redundant data

The [first large issue](https://github.com/LemmyNet/lemmy/pull/3482) I identified was a single query: `CommunityFollowerView::for_community`.

Whenever a user does a action on Lemmy (post a post, comment, like / dislike something), that action has to be federated to all interested users on other instances.

This worked as follows:

1. Retrieve a list of all users following the community from the database
2. Filter the follows to only the non-local followers
3. Get the inboxes of all the followers. If the instance of the follower has a shared (domain-wide) inbox, use that.
4. Send the activity to all the collected inboxes

Seems reasonable, right? Well, turns out this query was causing 2Gbit/s of data transfer out of the database, fetching 4 billion rows and causing 8 days of database query time per day. Why? There's two reasons

1. Lemmy uses the [Diesel ORM](https://diesel.rs/). Diesel allows fetching any subset of columns, but like any ORM it encourages abstracting tables into full structs and only ever fetching and updating all columns for simplicity.

    In this case, the query fetched this combined struct:

    ```rust
    pub struct CommunityFollowerView {
      pub community: Community,
      pub follower: Person,
    }
    ```

    The community and person structs both have over 20 columns. So for a like of a comment in a community with 20k followers, it was reading 20k copies of stuff like the full private and public key of the community, in addition to every user's name, key, and biography.

    So we only need around ~15 ^[`select avg(length(inbox_url)) from person`{.sql}] bytes per follower (the inbox URL), it was reading around 2kB ^[`select (select avg(octet_length(person.*::text)) from person) + (select avg(octet_length(community.*::text)) from community);`{.sql}]. That's an overhead of >99%.

2. Most federated instances support [shared inboxes](https://www.w3.org/TR/activitypub/#shared-inbox-delivery), which means that if the 20k followers are spread out over 1000 instances, we really only have a bit over 1000 URLs. This is a bit harder to optimize for since we have no guarantees this is the case, but just doing the uniqueness reduction in the database instead of in Rust is already a great improvement.

Simplified, I changed out this query:

```sql
select * from community
    join community_follower using (community_id)
    join person using (person_id)
    where community.apub_id = 'https://lemmy.world/c/news'
```

For this query:

```sql
select distinct coalesce(person.shared_inbox_url, person.inbox_url) from community
    join community_followers using (community_id)
    join person using (person_id)
    where community.apub_id = 'https://lemmy.world/c/news';
```

This reduced the amount of data transferred between PostgreSQL and Rust from 50MByte to ~10kByte [^calc1] for a vote on a comment with 20k people caring about the comment.

[^calc1]:
    ```qalc
    2.2kByte * 50k
    ```

<!-- At this point, you might think we should add some caching layers like Redis in between the database. -->

I find this interesting because it's a simple query with a simple issue and a simple solution, but it's not obvious from just looking at the Rust code and logic.

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

## "Conclusion" / Opinion

-   remove stuff, don't add more stuff
