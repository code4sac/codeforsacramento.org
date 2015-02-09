---
title: 'Jekylling Jekyll with Jekyll'
author: Richard Julian
layout: post
permalink: /jekylling-jekyll-02-04-2015/
main_image:
  -
categories:
  - learning
  - blog
tags:
  - learning
---

Code for Sacramento is a couple weeks into using our new Jekyll based website and we figured it'd be an awesome way to introduce members to contributing to open source projects and working with code! Here are a few reasons you should contribute or learn to contribute to the Code For Sacramento website:

* It likely needs the help!
* It'll teach you a new skill (git, HTML, css, jekyll, linux)
* You'll make your github profile happy!
* It's the only way you'll get published on our website!
* If you don't, *I* will have to be a designer and the last site I designed was on Geocities (and boy it was slick!)

Okay, so now that you've been convinced, let's move on to the **how**! 

If, at any time, these instructions don't work for you or you're stuck, feel free to [contact us](/contact) and we will help!


## The Setup 

### OS X

On OS X, this should be as simple as running `gem install bundler`.

### Linux

On Linux, there's a few depencies to install, but then you'll ultimately be up and running. To install the dependencies, run `sudo apt-get install git ruby ruby-dev build-essential nodejs bundler`.

## Working with Jekyll

### Let's Fork!

So, before we even get to hacking Jekyll, we need to get the website's code! While you could just clone the website by running `git clone https://github.com/code4sac/codeforsacramento.org.git` and getting to work on the code, we would suggest forking your own copy of the website to work on. You do this by going to [our repo](https://github.com/code4sac/codeforsacramento.org), clicking the 'Fork' button and then cloning from the link given to you on the right side under 'HTTPS clone URL'.

Github has documentation on [Forking repositories](https://help.github.com/articles/fork-a-repo/) for further information.

### Serving Jekyll

Now that we have the code, we can move into the directory and install the Jekyll environment to begin work! Installing the gems should be a matter of running `bundle install` from within the codeforsacramento.org directory. We can test our Jekyll install by running `jekyll serve --watch`. If all goes well, this will start a server on port 4000, letting you go to a browser and inserting `localhost:4000` in the URL field. If you can see the code4sac website with the URL localhost:4000 , then you're in business!

That `--watch` command is nifty, in that it allows you to edit files and Jekyll will recognize that they changed and instantly update them. So, while `jekyll serve --watch` is running in one window, open up a text editor (or another command line) and edit a file on our site (maybe `/_layouts/home.html` to say *Code For Midtown* instead of *Code for Sacramento*). When you go back to the site and refresh, your changes will be apparent.

Just like that, you've started contributing to our site. Edit the CSS to make design changes, add a page or post that you think matters, or [help solve some of our Github issues](https://github.com/code4sac/codeforsacramento.org/issues).

### Submit a Pull Request

You've done some contributions, you're happy with your work. You've ran the commands `git add` and `git commit` and `git push origin gh-pages`, now what? Why isn't it on the live site?! Well, likely you don't have access to post directly to the live website, so you have to **submit a pull request**!

Once pushed to your forked repo, you will be shown a green button next to the 'Branch' button. Click this and it will compare your code with the forked code (the actual hosted website) and from here, you can [submit a pull request](https://help.github.com/articles/using-pull-requests/) telling us what you've changed and why we need to include your post about the Official Code4Sac lolcats app! After that, it's up to the admin team to merge your code into the site! You've just given back to
us!

## You Rock!

If you've made it through all of this, way to go! If you're a developer, get to work as there's a lot to do out there! If you don't consider yourself a developer, this is great insight into working with code and it can break down some of the barriers to how to use version control and how to contribute to open source. 
