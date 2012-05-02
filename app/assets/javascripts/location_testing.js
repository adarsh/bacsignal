$.location = {
  // window.geolocation_provider is useful for testing purposes, not used in
  // development/staging/production envs.
  geolocation_provider: window.geolocation_provider || navigator.geolocation
}

// usage:
$.location.geolocation_provider.getCurrentLocation(successCallback, errorCallback)
