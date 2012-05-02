require 'open-uri'
require 'json'

class MainController < ApplicationController
  BASE_URL = 'http://api.tastedmenu.com/iphone/v2/tags/722/dishes?'
  URL_BRIDGE = '&market=1&&radius=1.0&api_key='
  API_KEY = 'VEIE3EuiFoS2Nr7nSWnfggOlxdnfMTx7ReDBMQyVf7UWTqLwanMHUd3fpSfo7vc'
  # 'http://api.tastedmenu.com/iphone/v2/tags/722/dishes?lat=42.36777&lng=-71.0914&market=1&&radius=1.0&api_key=VEIE3EuiFoS2Nr7nSWnfggOlxdnfMTx7ReDBMQyVf7UWTqLwanMHUd3fpSfo7vc'

  def index
    @latitude = params[:lat]
    @longitude = params[:lng]
    @output = JSON.parse(open(search_url).read)['data']['dishes']

    # json = open(search_url)
    # @thing = Dish.new(ActiveSupport::JSON.decode(json))
  end

  private

  def search_url
    BASE_URL + "lat=#{@latitude}&" + "lng=#{@longitude}" + URL_BRIDGE + API_KEY
  end
end
