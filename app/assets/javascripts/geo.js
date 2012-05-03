var Bacsignal = window.Bacsignal || {};

Bacsignal.Geo = {
  success: function(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    $('input#lat').val(latitude);
    $('input#lng').val(longitude);
    $form = $('#dishes_form')
    $form.bind('ajax:success', dishesIndex).submit();


    function dishesIndex(event, data){
      _.each(data,
          function(dish) {
            var miles = distance(latitude, longitude,
              dish.locations[0].lat, dish.locations[0].lng)

            $("ul#dishes").append("<li>" +
              dish.title +
              " at " +
              "<b>" + dish.restaurant_name + "</b>" +
              " " + miles + " miles away" +
              "</li>")
          })
    }


  },

  failure: function(failureMessage) {
    $('#geolocation-failure').show();
  },

  init: function() {
    if (geo_position_js.init()) {
      geo_position_js.getCurrentPosition(Bacsignal.Geo.success, Bacsignal.Geo.failure, { enableHighAccuracy: true });
    }
  }
};

Bacsignal.Geo.init();


function distance(lat1, lng1, lat2, lng2) {
  return (3958 * 3.1415926 * Math.sqrt((lat2 - lat1) * (lat2 - lat1) +
        Math.cos(lat2 / 57.29578) * Math.cos(lat1 / 57.29578) *
        (lng2 - lng1) * (lng2 - lng1)) / 180).toFixed(2);
};
