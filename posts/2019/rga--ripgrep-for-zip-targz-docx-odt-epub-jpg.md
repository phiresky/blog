---
title: "rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc."
date: 2019-06-16
updated: 2019-06-19
---

[rga](https://github.com/phiresky/ripgrep-all) is a line-oriented search tool that allows you to look for a regex in a multitude of file types. rga wraps the awesome [ripgrep] and enables it to search in pdf, docx, sqlite, jpg, zip, tar.\*, movie subtitles (mkv, mp4), etc.

[![github repo](https://img.shields.io/badge/repo-github.com%2Fphiresky%2Fripgrep--all-informational.svg)](https://github.com/phiresky/ripgrep-all)
[![Linux build status](https://api.travis-ci.org/phiresky/ripgrep-all.svg)](https://travis-ci.org/phiresky/ripgrep-all)
[![Crates.io](https://img.shields.io/crates/v/ripgrep-all.svg)](https://crates.io/crates/ripgrep-all)
[![fearless concurrency](https://img.shields.io/badge/concurrency-fearless-success.svg)](https://www.reddit.com/r/rustjerk/top/?sort=top&t=all)

## Examples

### PDFs

Say you have a large folder of papers or lecture slides, and you can't remember which one of them mentioned `GRU`s. With rga, you can just run this:

<pre class="ansi2html language-none">~$ rga "GRU" slides/
<span class="ansi35">slides/2016/winter1516_lecture14.pdf</span>
Page 34:   <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>                            LSTM
Page 35:   <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>                            CONV
Page 38:     - Try out <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>-RCN! (imo best model)

<span class="ansi35">slides/2018/cs231n_2018_ds08.pdf</span>
Page  3: ●   CNNs, GANs, RNNs, LSTMs, <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>
Page 35: ● 1) temporal pooling 2) RNN (e.g. LSTM, <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>)

<span class="ansi35">slides/2019/cs231n_2019_lecture10.pdf</span>
Page 103:   <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span> [Learning phrase representations using rnn
Page 105:    - Common to use LSTM or <span class="ansi1"></span><span class="ansi1 ansi31">GRU</span>

</pre>

and it will recursively find a string in pdfs, including if some of them are zipped up.

You can do mostly the same thing with [`pdfgrep -r`][pdfgrep], but you will miss content in other file types and it will be much slower:

```barchart
title: Searching in 65 pdfs with 93 slides each
series: run time (seconds, lower is better)
data:
   pdfgrep: 19.16
   rga (first run): 2.95
   rga (subsequent runs): 0.092
```

On the first run rga is mostly faster because of multithreading, but on subsequent runs (with the same files but any regex query) rga will cache the text extraction, so it becomes almost as fast as searching in plain text files. All runs were done with a warm FS cache.

### Other files

rga will recursively descend into archives and match text in every file type it knows.

Here is an example directory with different file types:

```
demo
├── greeting.mkv
├── hello.odt
├── hello.sqlite3
└── somearchive.zip
    ├── dir
    │   ├── greeting.docx
    │   └── inner.tar.gz
    │       └── greeting.pdf
    └── greeting.epub
```

(see the actual directory [here](https://github.com/phiresky/ripgrep-all/tree/master/exampledir/demo))

<pre class="ansi2html language-none">~$ rga "hello" demo/

<span class="ansi35">demo/greeting.mkv</span>
metadata: chapters.chapter.0.tags.title="Chapter 1: <span class="ansi1"></span><span class="ansi1 ansi31">Hello</span>"
00:08.398 --&gt; 00:11.758: <span class="ansi1"></span><span class="ansi1 ansi31">Hello</span> from a movie!

<span class="ansi35">demo/hello.odt</span>
<span class="ansi1"></span><span class="ansi1 ansi31">Hello</span> from an OpenDocument file!

<span class="ansi35">demo/hello.sqlite3</span>
tbl: greeting='<span class="ansi1"></span><span class="ansi1 ansi31">hello</span>', from='sqlite database!'

<span class="ansi35">demo/somearchive.zip</span>
dir/greeting.docx: <span class="ansi1"></span><span class="ansi1 ansi31">Hello</span> from a MS Office document!
dir/inner.tar.gz: greeting.pdf: Page 1: <span class="ansi1"></span><span class="ansi1 ansi31">Hello</span> from a PDF!
greeting.epub: <span class="ansi1"></span><span class="ansi1 ansi31">Hello</span> from an E-Book!
</pre>

It can even search jpg / png images and scanned pdfs using OCR, though this is disabled by default since it is not useful that often and pretty slow.

<pre class="ansi2html language-none">~$ # find screenshot of crates.io
~$ rga crates ~/screenshots --rga-adapters=+pdfpages,tesseract
<span class="ansi35">screenshots/2019-06-14-19-01-10.png</span>
<span class="ansi1"></span><span class="ansi1 ansi31">crates</span>.io I Browse All <span class="ansi1"></span><span class="ansi1 ansi31">Crates</span>  Docs v
Documentation Repository Dependent <span class="ansi1"></span><span class="ansi1 ansi31">crates</span>

~$ # there it is!
</pre>

## Setup

Linux, Windows and OSX binaries are available in GitHub releases. See [the readme](https://github.com/phiresky/ripgrep-all#installation) for more information.

For Arch Linux, I have packaged `rga` in the AUR: [`yay -S ripgrep-all`](https://aur.archlinux.org/packages/ripgrep-all/)

## Technical details

The code and a few more details are here: <https://github.com/phiresky/ripgrep-all>

`rga` simply runs ripgrep (`rg`) with some options set, especially `--pre=rga-preproc` and `--pre-glob`.

`rga-preproc [fname]` will match an "adapter" to the given file based on either it's filename or it's mime type (if `--rga-accurate` is given). You can see all adapters currently included in [src/adapters](https://github.com/phiresky/ripgrep-all/tree/master/src/adapters).

Some rga adapters run external binaries to do the actual work (such as pandoc or ffmpeg), usually by writing to stdin and reading from stdout. Others use a Rust library or bindings to achieve the same effect (like sqlite or zip).

To read archives, the `zip` and `tar` libraries are used, which work fully in a streaming fashion - this means that the RAM usage is low and no data is ever actually extracted to disk!

Most adapters read the files from a [Read](https://doc.rust-lang.org/std/io/trait.Read.html), so they work completely on streamed data (that can come from anywhere including within nested archives).

During the extraction, rga-preproc will compress the data with ZSTD to a memory cache while simultaneously writing it uncompressed to stdout. After completion, if the memory cache is smaller than 2MByte, it is written to a [rkv](https://docs.rs/rkv/0.9.6/rkv/) cache. The cache is keyed by (adapter, filename, mtime), so if a file changes it's content is extracted again.

## Future Work

-   I wanted to add a photograph adapter (based on object classification / detection) for fun, so you can grep for "mountain" and it will show pictures of mountains, like in Google Photos. It worked with [YOLO](https://pjreddie.com/darknet/yolo/), but something more useful and state-of-the art [like this](https://github.com/aimagelab/show-control-and-tell) proved very hard to integrate.
-   7z adapter (couldn't find a nice to use Rust library with streaming)
-   Allow per-adapter configuration options (probably via env (RGA_ADAPTERXYZ_CONF=json))
-   Maybe use a different disk kv-store as a cache instead of rkv, because I had some [weird problems](https://github.com/phiresky/ripgrep-all/blob/05835c1c42bc3575023a81e5494c5530078730fc/src/preproc_cache.rs#L30) with that. SQLite is great. All other Rust alternatives I could find don't allow writing from multiple processes.
-   Tests!
-   There's some more (mostly technical) todos in the code I don't know how to fix. Help wanted.

## Similar tools

-   [pdfgrep][pdfgrep]
-   [this gist](https://gist.github.com/phiresky/5025490526ba70663ab3b8af6c40a8db) has my proof of concept version of a caching extractor to use ripgrep as a replacement for pdfgrep.
-   [this gist](https://gist.github.com/ColonolBuendia/314826e37ec35c616d70506c38dc65aa) is a more extensive preprocessing script by [@ColonolBuendia](https://github.com/ColonolBuendia)

[pdfgrep]: https://pdfgrep.org/
[ripgrep]: https://github.com/BurntSushi/ripgrep
