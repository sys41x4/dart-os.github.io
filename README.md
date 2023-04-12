# Flat Corporate
---

[![Version](https://img.shields.io/gem/v/flat-corp_jekyll_theme)](https://rubygems.org/gems/flat-corp_jekyll_theme)
[![Downloads](https://img.shields.io/gem/dt/flat-corp_jekyll_theme)](https://rubygems.org/gems/flat-corp_jekyll_theme)

**Flat Corporate** is a simple theme for Jekyll. [[view live]](https://sys41x4.github.io/flat-corp)

Current theme used at [dart-os.github.io](http://dart-os.github.io/).

### Installation


The easiest solution is to [fork this repo](https://github.com/sys41x4/flat-corp/fork).
If you want to start from a clean website, follow the steps bellow:

Create a new Jekyll website:
```
jekyll new mysite
```

Open `Gemfile` and replace the line:
```
gem "minima"
```
with:
```
gem "flat-corp_jekyll_theme"
```

Open `_config.yml` and replace the line:
```
theme: minima
```
with:
```
theme: flat-corp_jekyll_theme
```
or, for GitHub Pages:
```
remote_theme: sys41x4/flat-corp
```

Finally, install the dependencies:
```
bundle install
```

and build the website!
```
bundle exec jekyll serve
```

### Header
Open the `_config.yml` file and add the following:
```yml
header:
  pages:
    - name: Home
      slug: /     # <-- index.md
    - name: Blog  # <-- blog.md
    - name: Whatever  # <-- whatever.md
```
Re-run `bundle exec jekyll serve` to see the header updated.

### Footer
Open the `_config.yml` file and add the following:
```yml
footer:
  show_powered_by: true
  contact:
    - name: Email
      value: yourmail@domain.com
      link: mailto:yourmail@domain.com
    - name: Reddit
      value: YourRedditUsername
      link: "#"
  follow:
    - name: Twitter
      link: http://twitter.com/YourTwitterUsername
      username: "@YourTwitterUsername"
    - name: Facebook
      link: http://facebook.com/YourFacebookUsername
    - name: LinkedIn
      link: http://linkedin.com/in/YourLinkedInUsername
    - name: GitHub
      link: http://github.com/YourGitHubUsername
    - name: Dribbble
      link: https://dribbble.com/YourDribbbleUsername
    - name: Weibo
      link: http://weibo.com/u/YourWeiboUsername
    - name: RSS
      link: /feed.xml
```
Re-run `bundle exec jekyll serve` to see the footer updated.

```


Your website is ready!


### Development

#### Run development instance (with hot-reload)
```sh
bundle exec jekyll serve --incremental
```

#### Build and publish the gem
```sh
gem build flat-corp_jekyll_theme.gemspec
```

```sh
gem push flat-corp_jekyll_theme-1.x.x.gem
```
