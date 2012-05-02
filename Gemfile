source 'http://rubygems.org'

gem 'rails', '3.1.1'
gem 'pg'

group :assets do
  gem 'sass-rails',   '~> 3.1.4'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'clearance'
gem 'thin'
gem 'sass'
gem 'high_voltage'
gem 'paperclip'
gem 'formtastic'
gem 'flutie'
gem 'bourbon'
gem 'copycopter_client'
gem 'haml-rails'

group :development do
  gem "heroku"
end

group :development, :test do
  gem "rspec-rails", "~> 2.6.1"
  gem "ruby-debug19"
  gem "sham_rack"
end

group :test do
  gem "cucumber-rails", "1.1.0"
  gem "capybara-webkit", "~> 0.7.1"
  gem "factory_girl_rails"
  gem "bourne"
  gem "database_cleaner"
  gem "timecop"
  gem "shoulda-matchers"
  gem "launchy"
  gem "email_spec"
end

group :staging, :production do
  gem 'newrelic_rpm'
  gem 'sprockets-redirect'
end
