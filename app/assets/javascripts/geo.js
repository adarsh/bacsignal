var Bacsignal = window.Bacsignal || {}
var latitude
var longitude
var outside_data

Bacsignal.Geo = {
  // Success Function
  success: function(position) {
    latitude  = position.coords.latitude
    longitude = position.coords.longitude

    // Form filling and submission
    $('input#lat').val(latitude)
    $('input#lng').val(longitude)
    $form = $('#dishes_form')
    $form.bind('ajax:success', dishesIndex).submit()

    function dishesIndex(event, data){
      outside_data = data

      // Adds .distance attribute for each dish
      _.each(data, function(dish) {
        dish.distance = locationFinder(dish.locations)
      })

      // Sorts by distance, ascending
      var data = _.sortBy(data, function(dish) { return dish.distance })

      _.each(data, function(dish) {

        $("ul#dishes").append("<li>" +
          "<b>" + dish.title + "</b>" +
          " rated: " + dish.rating +
          " at " +
          "<b>" + dish.restaurant_name + "</b>" +
          " (" + dish.distance + " miles away)" +
          "</li>")

      })
    }
  },

  // Failure Function
  failure: function(failureMessage) {
    $('#geolocation-failure').show()
  },

  init: function() {
    if (geo_position_js.init()) {
      geo_position_js.getCurrentPosition (
          Bacsignal.Geo.success, Bacsignal.Geo.failure,
          { enableHighAccuracy: true })
    }
  }
}

Bacsignal.Geo.init()

function distance (lat2, lng2) {

  return (3958 * 3.1415926 * Math.sqrt((lat2 - latitude) * (lat2 - latitude) +
        Math.cos(lat2 / 57.29578) * Math.cos(latitude / 57.29578) *
        (lng2 - longitude) * (lng2 - longitude)) / 180).toFixed(2)
}

function locationFinder (locations) {

  var miles = distance (locations[0].lat, locations[0].lng)
  var closest_location = locations[0]

  _.each(locations, function (place) {
    // console.log(place)
    var place_distance = distance (place['lat'], place['lng'])

    if (place_distance < miles)
    {
      miles = place_distance
    }
  })

  return miles
}
