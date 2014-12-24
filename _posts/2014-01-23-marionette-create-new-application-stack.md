---
title: 'Marionette: Create new Application Stack'
author: Kaleb Clark
layout: post
permalink: /marionette-create-new-application-stack/
main_image:
  - 
categories:
  - blog
---
After working with backbone.js for a couple of weeks, I knew that it would eventually lead to the Marionette.js framework. Up until now I had been writing the app stack by hand. I found yesterday there are generators that can set this up for you. We will look first into [yeoman][1].

[Yeoman][1] is a collection of generators, and we will be looking specifically at the generator by [Michael Richard][2] called [generator-marionette][3].

First. Make sure you go through and install all the dependencies that generator-marionette requires here: [generator-marionette:install][4].

Now you have access to the command &#8220;yo&#8221;. yo can be used to generate the full application stack for a marionette application. There are commands to generate the stack itself, views, controllers, models, routers, regions, layouts etc. I will direct you to the [original documentation][5] for detailed instructions on these commands.

For reference, here is an example of bootstrapping an application stack:

<pre class="brush: bash; title: ; notranslate" title="">$ yo marionette</pre>

This will create a directory structure with all the required files.

The layout of the application looks like:  
[<img class="alignnone size-full wp-image-125" alt="marionette" src="http://www.abraxxus.net/wp-content/uploads/2013/12/marionette.jpg" width="700" height="350" />][6]

Next:[ Marionette: Adding data to your app][7]

 [1]: http://yeoman.io/community-generators.html
 [2]: https://github.com/mrichard
 [3]: https://github.com/mrichard/generator-marionette
 [4]: https://github.com/mrichard/generator-marionette#install
 [5]: https://github.com/mrichard/generator-marionette#recommends
 [6]: http://www.abraxxus.net/wp-content/uploads/2013/12/marionette.jpg
 [7]: http://code4sac.org/marionette-adding-data-to-your-app/