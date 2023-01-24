source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem "rails", "~> 7.0.3"
ruby "3.0.4"

#database
gem "mysql2", "~> 0.5"

#views
gem "dynamic_form", "1.1.4"
gem "haml", "6.0.8"
gem "haml-rails", "2.1.0"
gem "jbuilder"
gem 'vite_rails', '3.0.13'

#assets
gem "jquery-rails", "4.5.0"

#utilities
gem 'dotenv-rails'
gem "puma", "~> 5.0"
gem "sprockets-rails"

#others
gem "bootsnap", require: false
gem "importmap-rails"
gem "stimulus-rails"
gem "turbo-rails"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
