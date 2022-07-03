---
title: Data Export Day
subtitle: Online data tends to disappear. I have a reminder so once per year I export as much data as I can from all online services that I use.
date: 2021-10-05
---

A few years ago, I was trying to get all transactions I had with a bank into a spreadsheet - but I realized that it only allowed me to export a CSV with the transactions from the past year. So all the older stuff I now only have in the form of paper or shitty PDFs. So I set myself a reminder to do the export every year. Over time I added more services, and by now it's kind of an event for me to download and organize all the data from online services once per year.

## Why

More and more data is locked into data silos of companies instead of being in files on your computer.

Here's just a few examples I've noticed:

-   Amazon stopped adding the order info to their confirmation emails. I used to be able to search for "product name" in my emails to find the info, this is not possible anymore. ([This might be why](https://news.ycombinator.com/item?id=28631732)). You have to go through the Amazon site, without any guarantees that they still allow you to find anything (e.g. you can't easily see how much you paid for an item, only for a whole order).
-   Spotify regularily removes songs. I have a ton of songs I'd never be able to find anymore if they disappear from my playlists. For now they show removed songs "greyed out" so you can at least see the title, but they have strong incentives to just make them disappear. YouTube has a very similar issue, and you can't even find out the title of deleted videos you have in playlists.
-   Companies regularily disappear or discontinue products. For example, I had a workout log for two years in some App that is now gone. Now I can't look up how much and what kind of workouts I did.
-   Telegram allows the other party in a chat to remove the whole chat history from your account. Chats contain tons of valuable information, and I often search in the history to find stuff I can't remember.

Summary: Not your disk, not your data.

## How

GDPR to the rescue! If you are an EU (or California) citizen, you have a right to get all data related to you in a machine readable format from all companies you interact with. This doesn't just include PII, but usually all information related to how you've interacted with the service (e.g. what you watched, liked, ...). Even if you are not in the EU, many companies have data export tools that you can still use ([hooray Brussels effect](https://en.wikipedia.org/wiki/Brussels_effect)) and if not I'd still try sending a data subject access request - I'd wager most companies don't verify whether you're in the EU or not.

Warning: The official data export tools companies provide are NOT equivalent to a real "legally binding" Data Subject Access Request (DSAR)! Many companies intentionally only give you a tiny subset of your data in their official tool, examples: [Spotify user gets 250MB of data only with GDPR request](https://www.reddit.com/r/spotify/comments/94g5mp/spotify_user_requests_gdpr_data_gets_250_mb_of/) / [Facebook has been trying to wriggle out of actually giving you your data for years](http://europe-v-facebook.org/EN/Get_your_Data_/get_your_data_.html). If you want to be sure, you need to check that the export tool specifically says it works in accordance with the GDPR, otherwise you might need to send an email or you'll just get the data they want you to see.

1. Go to the privacy policy of the company
2. Find the email address specifically of the data protection office or whatever. This is usually separate from the normal support email. e.g. redditdatarequests@reddit.com . Companies that interact with EU customers need to have one. There might also be a link to an official export tool here.
3. Send an email that minimally looks like this:

    Subject: GDPR Data Access Request

    Please send me a full copy of my data in a machine readable format according to Article 15 of the GDPR.

    [info that allows them to identify which account you mean]

    There's [templates online](https://ico.org.uk/your-data-matters/your-right-to-get-copies-of-your-data/preparing-and-submitting-your-subject-access-request/) that are probably legally better than this one.

4. If they don't respond after a few days, send them another email saying they have 30 days to respond and if they don't you'll complain to the DPA (data protection authority) - you can find info how to do this online, but most big companies seem to respond pretty well by now.

## What I do

Here's what I do on Data Export Day:

1. For every bank: Log in, export CSVs with transactions as far back as possible. In my experience trying a GDPR request for these is annoying.
2. Start a Google Takeout for every product, setting everything to JSON format where possible (https://google.com/takeout)
3. Request a Reddit data export (https://www.reddit.com/settings/data-request)
4. ... etc for other services with an export tool that's somewhat trustworthy
5. Send emails to the privacy email of various companies (Microsoft / Skype, Spotify, ...) Sadly this requires some manual work. Maybe someone should start a table of companies with the quickest way to get to your data. This + triggering the exports takes me around an hour.
6. Wait for the data to come in.. this takes hours to days depending on the company.
7. Extract / decompress all the data into my personal directory structure (companyname/DDDD-MM/...)
8. Find and remove duplicate files from older copies of the data with `rmlint -c sh:symlink -T df -k -m -g newexportdir // oldexportdirs*`
9. Do some fun stats maybe. Apparently I've spent 10k$ on Amazon in the past 8 years, and I've done around 6000 upvotes on Reddit, and 3800 downvotes.

## Why only once per year?

Purely lazyness - every company needs special treatment. If there was a way to automate it, I'd do this every month. But note that doing it at all regularily is better than doing it a few times, then forgetting for years. Also note that you usually can't do the data exports incrementally - my Google Takeout is 100GB and you can't tell it to only get new data.
