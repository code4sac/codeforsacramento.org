---
title: 'Webscraping with R'
author: Jonathan Boiser
layout: post
main_image:
  -
categories:
  - blog
  - tutorial
---

At the last meetup, Adam Kalsey gave a great presentation on scraping data from the web, illustrating the ideas with his beer-loving Twitterbot [@sactaps](http://twitter.com/sactaps). In this tutorial, I will show you how to scrape data from the web in R using the `rvest` package [Github link](http://github.com/hadley/rvest).

_(Warning: This tutorial involves browsing to websites advertising the sale of beer. If you are not of legal drinking age, please try this tutorial with other age-appropriate websites. Thanks!)_

### Installing `rvest` and SelectorGadget

If you haven't used R before, go ahead and download the R runtime and the RStudio Integrated Development Environment. We won't cover the basics of using RStudio, but there are plenty of resources for getting started. All of the code below can be entered directly in the console, or in the text editor (and then executed using Cmd/Ctrl-Enter).

Currently, `rvest` is not available on CRAN, the official repository of R packages. You will need to download the source code directly from the GitHub repository.

```
# if you do not have it already, install the devtools package
install.packages("devtools")
devtools::install_github("hadley/rvest")
library(rvest)
```

Another helpful tool you will want to install is the [SelectorGadget](http://selectorgadget.com/) Chrome extension, which makes it a lot easier to get the CSS selectors for webpage elements (compared to using "Inspect Element" and looking at the source code).

### Finding the right CSS selectors

Although Adam's talk focused on using the XPath and YQL query languages, in many cases we can locate useful data based on their CSS selectors, especially when the webpage uses semantic tag attributes.

Our first stop on our cyber pub crawl is to the Capitol Tap Room ([link](http://capitolbeer.com/on-tap/)). Here's a screenshot of the tap list:

![](/images/screenshots/capitol_taproom.png)

If you have SelectorGadget installed, click the magnifying glass to the right of the Address Bar, where your other Chrome extensions might be. With the extension activated, when you hover different elements on the webpage, they will be highlighted. Try clicking different things to see what happens. Make note of the gray bar on the bottom right.

Now, very carefully, hover your mouse around the bottom of the tap list until the entire box is highlighted:

![](/images/screenshots/capitol_taplist_div.png)

In the gray bar, you will see it read `#on-tap`. What this is telling us is that the highlighted object is an HTML element (probably a `div`) with `id="on-tap"`. Now, if we were to try scraping this, we would get all of the HTML for the `div`. Preferably, we would like to get the different beers separated out. So let's see if we can narrow things down to the individual beer names.

Press the "Clear" button on the gray bottom to clear your selection. Now, try hovering over the beer names until it highlights the smallest box around the text:

![](/images/screenshots/capitol_beername.png)


I couldn't capture it on the screenshot, but SelectorGadget is telling me that the beer names are `h3` elements (which also has a `.left` class). (This isn't very semantic at all!) And simply selecting `h3`s won't be precise enought: there are over 100 `h3` elements on this page, and not all of them are the beers on tap. But because we know these are encased in the `div#on-tap` element, we can manually target these. Clear the query in the gray box and enter: `div#on-tap h3`. Now all of the beer names in the "On Tap" section will be highlighted. As an exercise, trying writing a similar query that will grab the names of the bottles for sale (below the tap list).

### Grabbing the data in R

Now that we have some idea of what we should be querying off the webpage, let's go into R. Enter these commands in the console:

```
page <- rvest::html("http://capitolbeer.com/on-tap/")
beers_html <- rvest::html_nodes(x = page, css = "div#on-tap h3")
head(beers_html) # prints the html to the console
rvest::html_text(beers_html, trim = TRUE) # gets the text inside the tags and cleans up the whitespace characters
```

Here's what you should see after the last command:
```
[1] "Two Rivers Huckleberry Cider"                      "Evil Twin Freudian Slip Barleywine"
[3] "Bike Dog Mosaic Pale Ale"                          "Wildcard 2nd Anniversary BBA Porter"
[5] "Mraz Winter  IPA"                                  "Wildcard Liar’s Dice IPA"
[7] "Avery duganA Double IPA"                           "Warped Clear The Flag Rye Persimmon Ale"
[9] "Wildcard Reason For The Season Coffee Cream Stout" "Dogfish Head Beer Thousand Imperial Pilsner"
[11] "Wildcard Grade A Maple Brown"                      "Stillwater As Follows Golden Strong"
[13] "Wildcard 530 Hometown Ale"                         "Oskar Blues Icey PA Wheat Pale Ale"
[15] "Eel River Acai Berry Wheat"                        "St. Bernardus ABT 12 Quad"
[17] "Duchesse de Bourgogne Flemish Red"                 "Six Rivers Raspberry Lambic"
[19] "Woodfour Berliner Weisse"                          "Berryessa Rye Ryerish Dry Stout (Nitro)"
```

Very cool. The `rvest` functions also allow querying using XPath syntax, which was what Adam was covering. Scraping the data would then be the first step for doing interesting things with the data in R or some other programming language.

Give it a try with Capitol Tap Room's site (extra credit for trying other beer websites) and drop by at our weekly meetings if you have cool webscraping ideas you want to work on!
