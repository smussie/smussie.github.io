---
layout: post
title: "My Jekyll CheatSheet"
categories: [Cheatsheet]
visible: false
---

# Jekyll guide

[Jekyll tutorials](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)

## Requirements:

- [x] Ruby > 2.2.5(ruby -v),
- [x] rubygems (gem -v OR gem --version) [download gems](http://rubygems.org/pages/download) , GCC
      `bash - [x] sudo apt install bundler - [x] sudo apt install ruby ruby-dev build-essential (best to avoid installing Ruby Gems as the root user) #Therefore,we need to set up a gem installation directory for user account in ~/.bashrc - [x] echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc - [x] echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc - [x] echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc - [x] source ~/.bashrc #finally install jekyll - [x] gem install bundler jekyll - [x] jekyll --version`

## Creating:

### default minimal blog theme

    ``jekyll new jekyll-website``
    OR

### Create from scratch:

.. code-block:: bashrc
...
mkdir jekyll-website
cd jekyll-website
...

### Create a Gemfile

    	bundle init

### Add Jekyll

    	bundle add jekyll

### Install Gems

    	bundle install

## Update and upgrade:

    jekyll --version
    gem list jekyll
    gem outdated (to check if you have the latest version)
    gem update $(gem outdated | cut -d ' ' -f 1) __to update outdated gems__
    bundle update jekyll
    gem update jekyll

### to upgrade:

    gem update --system

## Build and run:

    ``bundle exec jekyll 3.7.3 ../smussie.github.io/ ``
    ``bundle init`` __in the jkl_dir__
    ``bundle add jekyll``
    ``bundle install``

### Run

    ``jekyll serve`` ( http://localhost:4000 ) ( http://127.0.0.1:4000 )
    **OR**
    ``bundle exec jekyll serve``

### Incase of inotify errors

- Get your current inotify file watch limit (default is 8192)
  `$ cat /proc/sys/fs/inotify/max_user_watches`
- Set new limit temporarily with:
  .. code-block:: bashrc
  ...
  $ sudo sysctl fs.inotify.max_user_watches=524288
  $ sudo sysctl -p
  ...
- To set limit permanent:
  .. code-block:: bashrc
  ...
  $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
  $ sudo sysctl -p
  ...

## Update with github pages:

    bundle update github-pages or simply bundle update
    if no bundler then:
    	``gem update github-pages``

## Miscellanious:

### To get gem information

     bundle info jekyll
     bundle show --paths
     gem which jekyll
     gem list
     gem help commands

     Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

     [jekyll-docs]: http://jekyllrb.com/docs/home
     [jekyll-gh]:   https://github.com/jekyll/jekyll
     [jekyll-talk]: https://talk.jekyllrb.com/
