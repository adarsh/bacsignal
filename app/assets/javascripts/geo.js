var Bacsignal = window.Bacsignal || {};

Bacsignal.Geo = {
  success: function(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    $('#latitude').text("Latitude: " + latitude);
    $('#longitude').text("Longitude: " + longitude);
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
