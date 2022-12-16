require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Knowledge
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config_env = ENV["CONFIG_ENV"].present? && Rails.env.to_s != 'test' ? ENV["CONFIG_ENV"].to_s : Rails.env.to_s
    Dotenv.load(File.join("#{Rails.root}/config/environments/.env.#{config_env}"))
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
