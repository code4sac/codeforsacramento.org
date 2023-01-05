codeforsacramento.org
=====================

Code for Sacramento is a platform for civic innovation. As an open source organization, you can fork our code including our website. Help us make the site better by [forking it](https://help.github.com/articles/fork-a-repo/), adding new content or features, and [submitting a pull request](https://help.github.com/articles/creating-a-pull-request/)!

### Requirements - via Docker (preferred unless you have issues installing and running docker)
* [Docker](https://docs.docker.com/install/)
* [Git](https://git-scm.com/downloads)
* Text Editor

### Installation - via Docker

#### Clone the Repository
`git clone https://github.com/code4sac/codeforsacramento.org.git`

Change here

#### Build docker image
`docker build . -t code4sac/codeforsacramento.org`

#### Run Docker image
`docker run -it -p 4000:4000 -v $(pwd):/usr/src/app code4sac/codeforsacramento.org`
Keep this tab open and running while you are viewing/editing.  Press ctrl + c to exit when you are finished.


### Requirements - installing on operating system without Docker
* [Ruby 1.9.3 or later](https://www.ruby-lang.org/en/documentation/installation/)
* [Bundler](http://bundler.io/)
* [Git](https://git-scm.com/downloads)
* Text Editor

### Installation

#### Clone the Repository
`git clone https://github.com/code4sac/codeforsacramento.org.git`

#### Install Dependencies
`bundle`

#### Build the Pages
`jekyll build`

#### Serve the Pages
`jekyll serve --watch`

### Hack Away

With `jekyll serve --watch` running, you should be able to access the site on [http://localhost:4000](http://localhost:4000)! Thanks to the `--watch` flag, any changes you make to the markdown (md) files will update automatically! 

For reference, here's an [awesome markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Contribute, change things, submit a pull request! We will all contribute.
