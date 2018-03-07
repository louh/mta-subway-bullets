nyc-subway-icons
----------------

SVG icons based on current New York City MTA subway lines.

#### Some notes

* Uses the [official MTA colors](http://web.mta.info/developers/resources/line_colors.htm).
* __Note:__ There's no official color for the SIR (Staten Island Railway) line; this is approximated from the MTA website's low-resolution imagery. It doesn't look like the SIR icon is really used anywhere except for the MTA website.
* A good resource for SVG icons exist in the public domain on [Wikipedia](http://commons.wikimedia.org/wiki/New_York_City_Subway_bullets), which includes historical lines. I referred to these for guidance, but ultimately created my own from scratch. In comparison, I increased the X-height of each letter in relationship to the circle in my version.

#### To convert SVG to PNG

Get `librsvg` for your system, e.g.

```sh
brew install librsvg
```

Then:

```sh
for svg in ./svg/*.svg; do rsvg-convert -o "${svg%.svg}".png "$svg"; done
```


#### License

I claim no ownership or rights over this work.

[CC0](http://creativecommons.org/publicdomain/zero/1.0/).
