# frozen_string_literal: true

source 'https://rubygems.org'

# Build with the GitHub Pages stack (pins Jekyll and plugins to supported versions)
gem 'github-pages', group: :jekyll_plugins

# Optional but fine to keep; works with GitHub Pages
gem 'jekyll-feed', group: :jekyll_plugins

# Ruby 3.x + Jekyll needs this for `jekyll serve`
gem 'webrick', '~> 1.8'

# Windows & JRuby timezone data
platforms :windows, :jruby do
  gem 'tzinfo', '>= 1', '< 3'
  gem 'tzinfo-data'
end

# JRuby-specific parser version (safe no-op on MRI)
platforms :jruby do
  gem 'http_parser.rb', '~> 0.6.0'
end

group :development do
  gem 'rubocop', require: false
end
