---
title: "Automatic citation extraction from URLs. (draft)"
author: |
    phiresky
date: 2019-08-21
# abstract: |
#     This is the abstract. The system is great.
link-citations: true
urlcolor: blue
citekeys:
    alexnet: http://dl.acm.org/citation.cfm?doid=3098997.3065386
    vgg: https://arxiv.org/abs/1409.1556
    googlenet: https://ieeexplore.ieee.org/document/7298594
    resnet: https://ieeexplore.ieee.org/document/7780459
    gan: https://papers.nips.cc/paper/5423-generative-adversarial-nets
    mendeley: https://www.mendeley.com/
---

# Introduction

This repo allows you to instantly and transparently cite most papers directly only given a single URL.

You simply add an URL of a publication, and it will replace that with a real citation in whatever [CSL](https://citationstyles.org/) style you want. This means you can avoid dealing with [Mendeley](https://www.mendeley.com/)[@] or [Zotero](https://www.zotero.org/) [@zotero] and keeping your Reference Manager database and bibtex file in sync, especially when collaborating with others.

# Minimal Example

Here is a minimal example:

**minimal.md**

```{.markdown .number-lines}
---
citekeys:
    gan: https://papers.nips.cc/paper/5423-generative-adversarial-nets
---

# Introduction

The GAN was first introduced in [@gan].

# References
```

Compiling this file with this command

```bash
pandoc --filter=pandoc-url2cite/index.js \
    --filter=pandoc-citeproc \
    minimal.md \
    --csl ieee.csl \
    -o minimal.pdf
```

This results in the following output:  
**minimal.pdf**  
![](example/minimal.png)

For a slightly longer example, you can look at this readme itself: [Source README.md](https://raw.githubusercontent.com/phiresky/pandoc-url2cite/master/README.md) - [Result README.pdf](https://github.com/phiresky/pandoc-url2cite/blob/master/README.pdf)

# How to Use

Clone [this repo](https://github.com/phiresky/pandoc-url2cite) somewhere, then install the dependencies using `npm ci install`. Then, add `--filter=pandoc-url2cite/index.js` to your pandoc command (before pandoc-citeproc).

If you're not familiar with writing papers in pandoc, you can refer to [e.g. this article](https://opensource.com/article/18/9/pandoc-research-paper). It's pretty flexible, you can use templates from whatever conference you want, and you can still use inline latex code if you need it (and you are ok with not being able to convert your document to nice HTML or EPUB anymore).

# How it Works

url2cite is based on the work of the [Zotero [@zotero]](https://www.zotero.org/) authors. Zotero has a set of ["Translators"](https://www.zotero.org/support/dev/translators) that are able to extract citation info from a number of specific and general web pages. These translators are written in Javascript and run within the context of the given web site. They are made to be used from the Zotero Connector browser extension, but thankfully there is a standalone [Translation Server](https://github.com/zotero/translation-server) as well. To avoid the effort required to automatically start and manage this server locally, url2cite instead uses a publicly accessible instance of this server provided by Wikipedia with a [public REST API](https://www.mediawiki.org/wiki/Citoid/API).

To improve performance and to avoid problems if the API might be down in the future, all citation data is cached (permanently) as bibtex as well as CSL to `citation-cache.json`.

# Limitations

1. Currently, extracting the metadata from direct URLs of full text PDFs does not work, so you will need to use the URL of an overview / abstract page etc. I'm not sure why, since this does work in Zotero. [More info might be here](https://github.com/zotero/translation-server/issues/70).
2. Currently, this filter only works if you use pandoc-citeproc, because the citations are written directly into the document metadata instead of into a bibtex file. If you want to use natbib or biblatex for citations, this filter currently won't work. Using citeproc has the disadvantage that it is somewhat less configurable than the "real" LaTeX citation text generators and the CSL language has some limitations. For example, the [bibtex "alpha"](https://www.overleaf.com/learn/latex/Bibtex_bibliography_styles) sometimes used in Germany can't be described in CSL.

# Related Work (Longer Example)

AlexNet [@alexnet] first introduced CNNs to the ImageNet challenge. [@vgg; @googlenet; @resnet] further improved on the results.

In [@gan] there is some other interesting stuff.

# References
