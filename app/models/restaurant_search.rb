class RestaurantSearch
  attr_reader :lat, :long

  def initialize(options)
    @long = options[:long]
    @lat = options[:lat]
  end
end
