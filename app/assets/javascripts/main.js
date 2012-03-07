function success(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;
  var mapUrl    = "http://maps.google.com/maps/api/staticmap?center=" +
    latitude + "," + longitude +
    "&zoom=14&size=320x160&sensor=false"
  $('#map').attr('src', mapUrl).show();
  console.log(position.coords.latitude + " " + position.coords.longitude);
}
function failure(failureMessage) {
  $('#geolocation-failure').show();
}
if (geo_position_js.init()) {
  geo_position_js.getCurrentPosition(
          success, failure,
              { enableHighAccuracy : true }
                );
}
