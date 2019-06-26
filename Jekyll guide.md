# Jekyll guide

This is a simple example package. You can use
[Github-flavored Markdown](https://guides.github.com/features/mastering-markdown/)
to write your content.

## Requirements:
- [x] Ruby > 2.2.5(ruby -v), rubygems (gem -v) , GCC
	```bash
		- [x] sudo apt install bundler
		- [x] sudo apt install ruby ruby-dev build-essential (best to avoid installing Ruby Gems as the root user)
			#Therefore,we need to set up a gem installation directory for user account in ~/.bashrc
		- [x] echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
		- [x] echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
		- [x] echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
		- [x] source ~/.bashrc
			#finally install jekyll
		- [x] gem install bundler jekyll
	```

## Creating:
### default minimal blog theme
		jekyll new jekyll-website
	OR
### Create from scratch:
	mkdir jekyll-website
	cd jekyll-website
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
	bundle update jekyll
	gem update jekyll
### to upgrade:
	gem update --system
## Build and run:
	bundle exec jekyll 3.7.3 ../smussie.github.io/
	in the jkl_dir ( bundle init)
	bundle add jekyll
	bundle install
	jekyll serve ( http://localhost:4000 ) ( http://127.0.0.1:4000 )
	Or
	bundle exec jekyll serve

## Update with github pages:
	bundle update github-pages or simply bundle update
	if no bundler then:
		gem update github-pages