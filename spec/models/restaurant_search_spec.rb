require 'spec_helper'

describe RestaurantSearch do
  it 'should initialize with a lat and long' do
    rs = RestaurantSearch.new(:lat => 42.35,
                              :long => -71.06)

    rs.lat.should == 42.35
    rs.long.should == -71.06
  end
end
