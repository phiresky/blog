---
title: Visualizing all books of the world in ISBN-Space
date: 2025-01-31
hidden: true
---

Libraries have been trying to collect humanity's knowledge almost since the invention of writing. In the digital age, it might actually be possible to create a comprehensive collection of all human writing meeting certain criteria That's what [shadow libraries](https://en.wikipedia.org/wiki/Shadow_library) do - collect and share as many books as possible.

One shadow library, Anna's Archive (which I will not link here directly due to copyright concerns), recently posed a question: _How we could effectively visualize 100,000,000 books or more at once?_ There's lots of data to view: Titles, authors, which countries the books come from, which publishers, how old they are, how many libraries hold them, whether they are available digitally, etc.

International Standard Book Numbers ([ISBNs](https://en.wikipedia.org/wiki/ISBN)) are 13-digit numbers that are assigned to almost all published books. Since the first three digits are fixed (currently only `978-` and `979-`) and the last digit is a checksum, this means **the total ISBN13-Space only has two billion slots**. Here is an interactive visualization of that space:

<div class="isbn-visualization-iframe-container"><iframe src="https://phiresky.github.io/isbn-visualization/" class="isbn-visualization-iframe">.</iframe></div>
