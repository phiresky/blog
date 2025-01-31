---
title: Visualizing all books of the world in ISBN-Space
date: 2025-01-31
og_image: https://phiresky.github.io/blog/2025/visualizing-all-books-in-isbn-space/screenshot2.png
---

Libraries have been trying to collect humanity's knowledge almost since the invention of writing. In the digital age, it might actually be possible to create a comprehensive collection of all human writing that meets certain criteria. That's what [shadow libraries](https://en.wikipedia.org/wiki/Shadow_library) do - collect and share as many books as possible.

One shadow library, Anna's Archive (which I will not link here directly due to copyright concerns), recently posed a question: _How could we effectively visualize 100,000,000 books or more at once?_ There's lots of data to view: Titles, authors, which countries the books come from, which publishers, how old they are, how many libraries hold them, whether they are available digitally, etc.

International Standard Book Numbers ([ISBNs](https://en.wikipedia.org/wiki/ISBN)) are 13-digit numbers that are assigned to almost all published books. Since the first three digits are fixed (currently only `978-` and `979-`) and the last digit is a checksum, this means **the total ISBN13-Space only has two billion slots**. Here is my interactive visualization of that space:

[Click here to view the visualization in full screen (esp. on mobile)](https://phiresky.github.io/isbn-visualization/){target="\_blank"}.

<div class="isbn-visualization-iframe-container"><iframe src="https://phiresky.github.io/isbn-visualization/" class="isbn-visualization-iframe">.</iframe></div>

You can choose a few different datasets, look for individual books, filter by publication year, and even create a custom visualization based on multiple datasets using custom shaders. If you zoom in all the way, you get a nice bookshelf-like representation.

Here's how I did it.

## The inherent structure of ISBNs

The `978-`/`979-` prefix of an ISBN comes from the fact that ISBN13s are a subset of [European Article Numbers](https://en.wikipedia.org/wiki/International_Article_Number), which have a three-digit prefix. This fixed prefix is affectionately called [Bookland](https://en.wikipedia.org/wiki/Bookland). We can thus ignore it almost completely.

Large blocks of 10k to 100 million ISBNs are assigned by the _International ISBN Agency_ to international organizations. Then, each country has their own method of subdividing their blocks into publishers.

The important part is that ISBN blocks are always assigned by **prefix**. For example, `978-4` is assigned to Japan, and Japan assigned `978-4-312` to one publisher. That publisher then assigns the articles `000000-99999`, leading to an ISBN of `978-4-312-99999-X`, where X is a checksum. The longer the country prefix is, the fewer books can be assigned within it. For example, while Japan has a space of 100 million ISBNs, Singapore has a prefix of `978-9971-`, allowing only 100 thousand ISBNs.

### Space-filling curves

When you strip ISBNs of their pre-and suffix, they are a single decimal number between 0 and 2 billion. We need some way to project this one-dimensional space into a two-dimensional space. The easiest way would be to simply fill pixels row-wise from the top, which results in an image like this:

![ISBN-Space presented linearly. Whiter pixels contain more books. You can see the line-stretched structure.](./oclc_isbns_smaller.png)

The issue with this is that smaller regions are stretched more and more horizontally, at the extreme a region is 1000 pixels wide and 1 pixel high. This makes it hard to see the inherent structure of ISBNs.

Thus, [as people on Hacker News discussed](https://news.ycombinator.com/item?id=42652577), a better way to fill an image is using a [space-filling curve](https://en.wikipedia.org/wiki/Space-filling_curve).

The commonly suggested Hilbert-curve is nice, but it leads to artifacts:

![Left: a Hilbert curve. Right: ISBN-space projected into a hilbert curve. You can see that the regions look like they have spatial structure, but this is purely an artifact of the curve used. (credit: Wikipedia, Hypha A)](hilbert.png)

While the Hilbert curve helps make regions more "square" (smaller regions do not get wider and wider), it introduces structure where there is none. Since structures that are not actually part of data are a huge issue in data visualization, we want to avoid this.

### The "Bookshelf"-Curve

ISBNs are inherently decimal, and we can use this to create a space-filling curve that is both simple to implement, easy to understand, and visually appealing:

![The space-filling curve I call "Bookshelf-Curve" because each second layer looks like an upright bookshelf, and each other layer like a stack of books.](bookshelf-curve.drawio.svg)

The first decimal layer contains the digits 0-9 next to each other, the next one has them on top of each other, recursively. If we want to keep the aspect ratio of the rectangles on the first layer $(a\times b)$ and second layer $(b \times c)$ the same, this leads to an aspect ratio of each block of 3.16 to 1:

$$ \frac{a}{b} = \frac{b}{c}. $$

$$ \frac{a}{c} = \frac{10}{1}. $$

$$ \implies \frac{a}{b} = \frac{10\cdot b}{a} \implies \frac{a^2}{b^2} = 10 $$

$$ \implies a:b = \sqrt{10} \approx 3.16:1 $$

This is very similar to [A4 paper](https://en.wikipedia.org/wiki/ISO_216), which is defined as follows: Take a rectangle of size $1m^2$, such that if you fold it in half you get a rectangle of the same aspect ratio. The first recursive iteration is A0-paper, the fourth iteration is A4. They all have an aspect ratio of $1:\sqrt{2}$.

We just divide each paper into ten sections, not two. Even better, with this curve, the coordinate transformation is really simple!

![Transforming an ISBN into coordinates by simply taking every second digit](coordinates.drawio.svg)

This transformation is really simple, but this took me ages to realize and I tried to generalize it, so my code for it is [50 lines](https://github.com/phiresky/isbn-visualization/blob/master/src/projections/bookshelf.ts#L49-L100).

## Map tiles

Now that we have our space, we can generate tiled images for each prefix:

![A single tile containing the average publication dates for the prefix 978-06](publication-date-978-06-small.png)

I targeted a size of ~100kB per tile, which resulted in a size of 2000 pixels times 633 ($=2000/\sqrt{10}$).

For each dataset, we store different information per pixel. In this case, I subtracted 1800 from the publication year to get a range of 1800 to 2055 in 8 bits. The red channel contains the average publication year of each book in the pixel, the blue channel contains the ratio of books present (e.g. if 50% of books exist, blue channel would be 127/255).

At the maximum zoom level on the other hand, I decided to map exactly 1 book to 1 pixel for accuracy:

![Zoom level 4 (1 book = 1 pixel) and zoom level 3](full-zoom.png)

## Shaders

Originally I stored RGB data directly in the map tiles, but in order to increase the flexibility I decided to store more abstract data, and do the actual rendering on the GPU using GLSL fragment shaders. This has a few advantages:

-   Color scheme can be chosen later
-   We can apply arbitrary transformations or filters that update instantly
-   We can combine multiple datasets on the fly

For example, let's take the publisher dataset. We store years from 1800 to 2055. But 95% of data is in the range 1985 to 2024. So we can reduce it to this range in the shader, which looks like this:

```glsl
// GLSL fragment shader code - runs for every pixel on the GPU
vec4 colorOfPixel(vec2 uv) {
  vec4 bookColor = texture2D($dataset_publication_date, uv);
  // average publication year in this pixel
  float publicationYear = (bookColor.r * 255.) + 1800.;
  // 0-100% number of books exist
  float fillRate = bookColor.b;
  float minYear = 1985.;
  float maxYear = 2025.;
  float brightness = fillRate;
  // scale year to range 0 to 1
  float lerp = clamp((publicationYear - minYear) / (maxYear - minYear), 0., 1.);
  return heatmapColor(lerp) * brightness;
}
```

`vec4 heatmapColor(float)` is a function that converts a 0-1 value to the chosen color scale of the user, by sampling another texture.

Of course, we can also easily play with non-linear scales and adjust ranges as we want.

Here's an example that compares two datasets:

```glsl
vec4 colorOfPixel(vec2 uv) {
  vec4 present_all = texture2D($dataset_all, uv);
  vec4 present_md5 = texture2D($dataset_md5, uv);

  vec4 present_gradient = heatmapColor(present_md5.x / present_all.x) * brightnessWithGlow(present_all.x);
  // add publishers only in background (when brightness of gradient > 0.1);
  float publisherStrength = length(present_gradient) > 1.1 ? 0.0 : PUBLISHERS_BRIGHTNESS;
  return postprocessColor(present_gradient, publisherStrength);
}
```

The `$dataset_x` syntax is not part of GLSL, but rather a very simple (regex) templating syntax, that allows me to only load the images that the shader actually reads from.

You can edit the used shader directly in the visualization by going to the **⚙️ Advanced** options, it updates live. The meaning of the pixels in each dataset is described in [the readme](https://github.com/phiresky/isbn-visualization).

### The bookshelf-view

In order to improve the visuals, at the fully zoomed in view, each pixel gets a styling resembling a book:

![Side-by-side comparison of the bookshelf-shader disabled and enabled (toggleable in advanced options). Each book is assigned a random width, height, and pattern.](bookshelf-example.png)

It's not really what books look like, but it makes the fully zoomed in view look much more alive. This styling is purely [implemented in the shader](https://github.com/phiresky/isbn-visualization/blob/master/src/lib/shaders.ts#L105-L151). The hardest part was getting a random-number generator to work the same within GLSL and JavaScript, since we need to know the book-height in order to set the text boundaries.

Since the styling is in the shader, we can make it smoothly appear by simply passing in the current zoom as an uniform and fading it in:

```glsl
uniform float CURRENT_ZOOM;

vec4 bookshelfOverlayDependingOnZoom(vec4 bookColor) {
  float minZoom = 90.0;
  if (CURRENT_ZOOM < minZoom) return bookColor;
  float maxZoom = minZoom * sqrt(10.0); // fade between two zoom levels
  vec4 overlay = bookshelfOverlay(bookColor);
  float fadeIn = clamp((CURRENT_ZOOM - minZoom) / (maxZoom - minZoom), 0.0, 1.0);
  return mix(bookColor, overlay, fadeIn);
}
```

As far as I know, shaders work in ~32x32 pixel blocks in lockstep, which means that _every branch_ that happens in _any pixel_ in a block needs to be executed. But the zoom level is the same for all pixels, so this should even be performant.

## Trees, Text, Performance

Just like the image tiles, I render text in a hierarchical structure depending on zoom levels and view frustrum culling. Everything is implemented using [react-threejs-fiber](https://r3f.docs.pmnd.rs). The scene is described declaratively, React recursively adds scene elements as the view is moved around. Here's an approximation of what the hierarchical Tree component looks like:

```typescript
// TypeScript JSX
function RenderTree(props: { prefix: IsbnPrefixWithDashes }) {
  // compute where we should place text and whether we should render children.
  // depends on current view frustrum and zoom level
  const { plane, renderChildren } = getDetailLevel(props.prefix);
  // load prefix details asynchronously using a mobx observable
  const prefixDetails = useMemo(
    () => fromPromise(getPrefixDetails(props.prefix)),
    [props.prefix]);
  // load the relevant textures for the dataset and create a GLSL material
  const material = useMemo(
    () => fromPromise(getIsbnShaderMaterial(props.prefix)),
    [props.prefix]);

  return (
    // these elements are part of the threejs WebGL scene graph
    <group position={plane.position}>
      <Plane args={plane.size} material={material} />
      {/* opt out of the threejs scene graph and add a html element
          instead, using 3D CSS transforms */}
      <Html>
        {prefixDetails.state === "fulfilled" &&
          prefixDetails.value.publisherName}...
      </Html>
      {renderChildren &&
        digits.map((i) =>
          <RenderTree prefix={props.prefix + i} />
        )}
    </group>
  );
};
```

I had lots of performance problems initially with rendering a lot of text this way. I spent a lot of time trying and failing to render text into images/canvas in JS without having to implement my own text wrapping and layouting engine. The best approach was to [embed the HTML as a `<foreignObject />` within an SVG](https://stackoverflow.com/a/25760896/2639190), then render that to a canvas using `drawImage`, then converting that to an image and loading it as a texture.

This works, but it caused `20ms` lags every time, synchronously in the rendering process. I struggled to move this to a WebWorker, but it turns out [it's impossible to draw an SVG in a WebWorker](https://stackoverflow.com/a/79196371/2639190).

After all this frustrating effort, it turns out I could fix most of my performance concerns by just reducing the HTML elements, limiting DOM content added per frame, and especially removing a stack of `text-shadow` CSS filters, which are apparently horrible for performance.

## Barcodes

At max zoom, you will also notice that each book has a barcode. I mainly added these to reinforce the concept of what we are looking at: Books ordered by ISBN. I started with some libraries to render bar codes, but it turns out there's actually a TTF font that just renders a 13-digit number as a barcode! It even calculates the check digit itself: https://graphicore.github.io/librebarcode/. Pretty convenient, and performant too, due to all the optimization OSs do for text rendering.

## Publisher ranges

Each "group" (usually countries) has a large range, and each publisher has a smaller range within a group. I decided to visualize this using randomly assigned colors unique for each group and publisher:

![Looking at publishers shows their range size. If a publisher has multiple ranges the color is the same.](publishers.png)

In order to allow highlighting all ranges of a publisher simultaneously, I simply give each publisher a unique ID and store this as the RGB components:

```glsl
  ivec4 data = getIntegerRGB(texture2D($dataset_publishers, vUv));
  int publisherId = data.r * 65536 + data.g * 256 + data.b;
  if (HIGHLIGHTED_PUBLISHER_ID == publisherId) {
    return vec4(1.); // white
  }
```

This part I'm not extremely happy with. The publisher colors clash with the heatmap color scale, and country ranges are hard to see.

## Flight

If you search for a book or click on the minimap, you will fly there. Calculating a good looking flight path is actually much trickier than it seems. I'm not sure how Google Earth does it. After getting a mediocre result by fitting a parabola, I nerd sniped a friend of mine to get him to do it, here's what he said:

> "Somehow you're pretending reality is polar coordinates and converting that to cartesian coordinates?" -
> "Yes it transforms the points into a space which has the property that for a certain zoom level (which you potentially can't reach at all) all coordinates lie on one point but all ground points are still the same distance away... aka a semicircle (or less) where the edge of the circle has the xy points zoomed in at maximum... in other words, a space that represents the speed and spatiality of the original space in one... in which the direct route is then theoretically the fastest route.... Unfortunately, this only applies if the increase in speed depends linearly on the zoom level.... but this is not the case with normal zooming... there it is rather quadratic... so every zoom level further up makes you move twice as fast to the right left... but this somehow results in a strange non-linear space with strange properties and I haven't managed to define a distance metric in there, let alone the shortest path between two points"
>
> -- my friend rambling about calculating flight paths

![Blub-space transformation for smooth flight paths. This is what he sent me to try and explain it.](blub-space.png)

The end result isn't perfect and it feels a bit overengineered at 500 lines of code, but it works better than my original approach.

## Architecture

### Backend

Since we can just store our image tiles as PNG and our data trees as JSON, we don't need any backend! We just need a static file host, like Github Pages to dump some HTML, JS, CSS, PNG, and JSON.

### Frontend

I used ThreeJS, React, MobX. This is a very comfortable combination to create reactive declarative GPU-accelerated 2D/3D-scenes, with easy reusability of components. I can recommend it.

## Processing Scripts

There's a set of processing scripts, mostly written in JS (directly writing out JSON and PNG files), but one of them written in Rust since it has to read in a 250GByte source file, writing output to SQLite.

## Conclusion

We now have a very flexible way of visualizing all books that have been published with an ISBN. I enjoyed working on this project a lot. In the end, it was made possible by what would in software be called a bad choice - using an identifier that can only barely fit enough elements. If you tried the same with UUIDs, you'd have purely vast emptiness ;)

The source code is available at https://github.com/phiresky/isbn-visualization.
