var Bacsignal = window.Bacsignal || {};

Bacsignal.Geo = {
  success: function(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    $('input#lat').val(latitude);
    $('input#lng').val(longitude);
    $form = $('#dishes_form')
    $form.bind('ajax:success', dishesIndex).submit();
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

function dishesIndex(event, data){
  _.each(data,
      function(dish) {
        $("ul#dishes").append("<li>" + dish.title + "</li>")
      })
}
