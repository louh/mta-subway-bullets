mta-subway-bullets
==================

SVG and PNG icons based on current New York City MTA subway lines.

<p>
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/1.svg" alt="1" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/2.svg" alt="2" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/3.svg" alt="3" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/4.svg" alt="4" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/5.svg" alt="5" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/6.svg" alt="6" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/6d.svg" alt="6d" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/7.svg" alt="7" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/7d.svg" alt="7d" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/a.svg" alt="a" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/c.svg" alt="c" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/e.svg" alt="e" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/b.svg" alt="b" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/d.svg" alt="d" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/f.svg" alt="f" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/fd.svg" alt="fd" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/m.svg" alt="m" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/g.svg" alt="g" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/j.svg" alt="j" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/z.svg" alt="z" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/l.svg" alt="l" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/n.svg" alt="n" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/q.svg" alt="q" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/r.svg" alt="r" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/w.svg" alt="w" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/sf.svg" alt="sf" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/s.svg" alt="s" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/sr.svg" alt="sr" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/sir.svg" alt="sir" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/h.svg" alt="h" width="48">
<img src="https://unpkg.com/mta-subway-bullets@1.0.0/dist/svg/t.svg" alt="t" width="48">
</p>

## What's included?

- **Vector-format SVG files**, compressed and optimized.
- **Raster-format PNG images**, compressed and optimized (90px ✕ 90px).
- **SVG sprite bundle**, in case you prefer to use that over individual image files.

All files are located in the `./dist` folder.

Also, in the `./src/svg` folder there are uncompressed SVGs if you prefer working with those (e.g. you have your own optimization process) and in `./src/icons` is a source file for Affinity Designer v2 that all images are generated from. A build pipeline takes the source SVGs `./src` and creates the output in `./dist`.

## Some notes

* Uses the [official MTA colors](http://web.mta.info/developers/resources/line_colors.htm).
* __Notes:__
  * There's no official color for the SIR (Staten Island Railway) line; this now uses the latest color on the new MTA website.
  * There's no official color for the planned T (Second Avenue) line; this color was adapted from internal MTA sources.
* A good resource for SVG icons exist in the public domain on [Wikipedia](http://commons.wikimedia.org/wiki/New_York_City_Subway_bullets), which includes historical lines. I referred to these for guidance, but created my own from scratch. In comparison, I increased the X-height of each letter in relationship to the circle in my version. This allows each bullet to "read" better when used as part of inline text, such as in MTA status alerts.
* Because of the shape of the diamond bullets, they seem "smaller" when used side by side with the circle bullets. I recommend increasing the size of the diamond bullets by about 15-20% to make the numbers more legible.

### Examples of usage in the wild

* The [MTA Weekender Unofficial HD Remaster](https://louhuang.com/weekender-hd-remaster/), my update of the [MTA's Weekender](http://web.mta.info/weekender/servicestatus.html) (now retired). ([GitHub](https://github.com/louh/weekender))
* [Signal sticker pack](https://signal.art/addstickers/#pack_id=14994fdf754d54904483a50523e4cfe2&pack_key=a607d7b07c3ca8626ea5f6dd51eefb8e7e9f05829d966aa496ea737ec04b525a) by [Parker Higgens](https://twitter.com/xor/status/1223413178253697025).


## Technocery

You can install this in a Node project with a package manager, e.g.

```sh
npm install mta-subway-bullets
```

or

```sh
yarn add mta-subway-bullets
```

## License

This repository is not the official work of the MTA and I have no affiliation with the MTA. I claim no ownership or rights over this work.

[CC0](http://creativecommons.org/publicdomain/zero/1.0/).
