---
title: "((draft)) rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc"
date: 2019-06-13
---

rga is a line-oriented search tool that allows you to look for a regex in a multitude of file types. rga wraps the awesome [ripgrep] and enables it to search in pdf, docx, sqlite, jpg, movie subtitles (mkv, mp4), etc.

[![Linux build status](https://api.travis-ci.org/phiresky/ripgrep_all.svg)](https://travis-ci.org/phiresky/ripgrep_all)
[![Crates.io](https://img.shields.io/crates/v/ripgrep_all.svg)](https://crates.io/crates/ripgrep_all)

## Examples

### PDFs

Say you have a large folder of papers or lecture slides, and you can't remember which one of them mentioned `LSTM`s. With rga, you can just run this:

```bash
> rga "LSTM|GRU" collection/

[results]
```

and it will recursively find a regex in pdfs and pptx slides, including if some of them are zipped up.

You can do mostly the same thing with [`pdfgrep -r`][pdfgrep], but you will miss content in other file types and it will be much slower:

```barchart
title: Searching in 65 pdfs with 93 slides each
series: run time (seconds, lower is better)
data:
   pdfgrep: 30.97
   rga (first run): 9.91
   rga (subsequent runs): 0.156
```

On the first run rga is mostly faster because of multithreading, but on subsequent runs (with the same files but any regex query) rga will cache the text extraction, so it becomes almost as fast as searching in plain text files.

### Other files

rga will recursively descend into archives and match text in every file type it knows.

Here is an example:

```
demo
├── hello.odt
├── hello.sqlite3
├── greeting.mkv
└── somearchive.zip
    ├── dir
    │   ├── greeting.docx
    │   └── inner.tar.gz
    │       └── greeting.pdf
    └── greeting.epub
```

<pre class="ansi2html">
$ rga "hello" demo/

<span style="color: #E850A8">hello.odt</span>
<span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span> from an OpenDocument file!

<span style="color: #E850A8">somearchive.zip</span>
dir/greeting.docx: <span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span> from a MS Office document!
dir/inner.tar.gz: greeting.pdf: Page 1: <span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span> from a PDF!
greeting.epub: <span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span> from an E-Book!

<span style="color: #E850A8">greeting.mkv</span>
metadata: chapters.chapter.0.tags.title="Chapter 1: <span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span>"
00:08.398 --&gt; 00:11.758: <span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">Hello</span> from a movie!

<span style="color: #E850A8">hello.sqlite3</span>
tbl: greeting='<span style="font-weight: bold"></span><span style="font-weight: bold; color: #aa0000">hello</span>', from='sqlite database!'

</pre>

It can even search jpg / png images and scanned pdfs using OCR, though this is disabled by default since it is not useful that often and very slow.

```bash
rga --rga-adapters=+pdfpages,tesseract hello inputdir
```

## Setup

rga should compile with stable Rust. To install it, simply run (your OSes equivalent of)

```bash
apt install build-essential pandoc poppler-utils ffmpeg
cargo install ripgrep_all

rga --help # works! :)
```

You don't necessarily need to install any dependencies, but then you will see an error when trying to read from the corresponding file type (e.g. poppler-utils for pdf).

## Technical details

`rga` simply runs ripgrep (`rg`) with some options set, especially `--pre=rga-preproc` and `--pre-glob`.

`rga-preproc [fname]` will match an "adapter" to the given file based on either it's filename or it's mime type (if `--accurate` is given). You can see all adapters currently included in [src/adapters](src/adapters).

Some rga adapters run external binaries to do the actual work (such as pandoc or ffmpeg), usually by writing to stdin and reading from stdout. Others use a Rust library or bindings to achieve the same effect (like sqlite or zip).

To read archives, the `zip` and `tar` libraries are used, which work fully in a streaming fashion - this means that the RAM usage is low and no data is ever actually extracted to disk!

Most adapters read the files from a [Read](https://doc.rust-lang.org/std/io/trait.Read.html), so they work completely on streamed data (that can come from anywhere including within nested archives).

During the extraction, rga-preproc will compress the data with ZSTD to a memory cache while simultaneously writing it uncompressed to stdout. After completion, if the memory cache is smaller than 2MByte, it is written to a [rkv](https://docs.rs/rkv/0.9.6/rkv/) cache

## Development

To enable debug logging:

```bash
export RUST_LOG=debug
export RUST_BACKTRACE=1
```

Also rember to disable caching with `--rga-no-cache` or clear the cache in `~/.cache/rga` to debug the adapters.

## Future Work

-   I wanted to add a photograph adapter (based on object classification / detection) for fun, so you can grep for "mountain" and it will show pictures of mountains, like in Google Photos. It worked with [YOLO](https://pjreddie.com/darknet/yolo/), but something more useful and state-of-the art [like this](https://github.com/aimagelab/show-control-and-tell) proved very hard to integrate.
-   7z adapter (couldn't find a nice to use Rust library with streaming)
-   allow per-adapter configuration options (probably via env (RGA_ADAPTER_CONF=json))
-   maybe use a different disk kv-store as a cache instead of rkv, because I had some [weird problems](src/preproc_cache.rs#30) with that. SQLite is great. All other Rust alternatives I could find don't allow writing from multiple processes.
-   there's some more (mostly technical) todos in the code I don't know how to fix

## Similar tools

-   [pdfgrep][pdfgrep]
-   [this gist](https://gist.github.com/phiresky/5025490526ba70663ab3b8af6c40a8db) has my proof of concept version of a caching extractor to use ripgrep as a replacement for pdfgrep.
-   [this gist](https://gist.github.com/ColonolBuendia/314826e37ec35c616d70506c38dc65aa) is a more extensive preprocessing script by [@ColonolBuendia](https://github.com/ColonolBuendia)

[pdfgrep]: https://pdfgrep.org/
[ripgrep]: https://github.com/BurntSushi/ripgrep

<style>
pre {
   white-space: pre-wrap;
   word-wrap: break-word;
}
.ansi2html {
   color: white;
   background-color: black;
}
</style>
