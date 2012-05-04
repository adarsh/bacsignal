class DishesController < ApplicationController
  require 'open-uri'

  BASE_URL = 'http://api.tastedmenu.com/iphone/v2/tags/722/dishes?'
  URL_BRIDGE = '&market=1&&radius=1.0&api_key='
  API_KEY = 'VEIE3EuiFoS2Nr7nSWnfggOlxdnfMTx7ReDBMQyVf7UWTqLwanMHUd3fpSfo7vc'

  respond_to :json

  def index
    @lat = params[:lat]
    @lng = params[:lng]

    respond_with JSON.parse(open(search_url).read)['data']['dishes']
  end

  private

  def search_url
    BASE_URL + "lat=#{@lat}&" + "lng=#{@lng}" + URL_BRIDGE + API_KEY
  end
end
