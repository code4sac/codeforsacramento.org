---
title: Jekyll Test
author: Code for Sacramento
layout: page
permalink: /jekyll/
---

# Set up your environment:

### Linux

Requirements

* ruby (gems)
* ruby-dev
* build-essential 
* Jekyll

#### Install (Debian-based/Ubuntu)

1. Run `sudo apt-get install git ruby ruby-dev build-essential` 
2. Run `sudo gem install jekyll --version "=1.4.2"`
3. Run `git clone https://github.com/code4sac/codeforsacramento.org.git`
4. Run `cd codeforsacramento.org`
5. Run `jekyll serve --watch`
6. In a browser, go to localhost:4000

### OS X

1. Run `gem install jekyll --version "=1.4.2"`
2. Run `git clone https://github.com/code4sac/codeforsacramento.org.git`
3. Run `cd codeforsacramento.org`
4. Run `jekyll serve --watch`
5. In a browser, go to localhost:4000

### Windows

#### Attempt Jekyll installation Alone

#### Setting up Ubuntu in a VM

1. Install Virtualbox (if not installed) from executable.
2. Create new VM with provided VDI (should be base Ubuntu, 64-bit only!)
3. Follow instructions for Linux above, stopping before going to a browser
4. Set up port forwarding on the guest, so that you can access localhost:4000
* Click 'Devices'
* Click 'Network Adapters'
* Click 'Port Forwarding'
* Click the '+' sign to add a new forwarding rule
* In guest port, insert 4000, in host port, insert 4000. 
5. Now go to localhost:4000

* Extra: install PuTTY so you can use an ssh client rather than Virtualbox client
* Set up shared folders with host so that you can edit in Windows and have updated in Linux.
