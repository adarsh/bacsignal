var Bacsignal = window.Bacsignal || {}
var latitude
var longitude
var outside_data

Bacsignal.Geo = {
  // Success Function
  success: function(position) {
    latitude  = position.coords.latitude
    longitude = position.coords.longitude

    $('input#lat').val(latitude)
    $('input#lng').val(longitude)
    $form = $('#dishes_form')
    $form.bind('ajax:success', dishesIndex).submit()

    function dishesIndex(event, data){
      outside_data = data
      _.each(data, function(dish) {

        var miles = locationFinder(dish.locations)

        $("ul#dishes").append("<li>" +
          dish.title +
          " at " +
          "<b>" + dish.restaurant_name + "</b>" +
          " " + miles + " miles away" +
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

function distance (lat1, lng1, lat2, lng2) {

  return (3958 * 3.1415926 * Math.sqrt((lat2 - lat1) * (lat2 - lat1) +
        Math.cos(lat2 / 57.29578) * Math.cos(lat1 / 57.29578) *
        (lng2 - lng1) * (lng2 - lng1)) / 180).toFixed(2)

}

function locationFinder (locations) {
  var miles = distance (latitude, longitude, locations[0].lat, locations[0].lng)

  _.each(locations, function (place) {
    var place_distance = distance (latitude, longitude, place['lat'], place['lng'])

    if (place_distance < miles)
    {
      miles = place_distance
    }
  })

  return miles
}
