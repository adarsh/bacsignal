var Bacsignal = window.Bacsignal || {};

Bacsignal.Geo = {
  success: function(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var mapUrl    = "http://maps.google.com/maps/api/staticmap?center=" +
      latitude + "," + longitude +
      "&zoom=14&size=320x160&sensor=false";
    $('#map').attr('src', mapUrl).show();
    console.log(position.coords.latitude + " " + position.coords.longitude);
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
