App.Collections.Forecasts = Backbone.Collection.extend({
  url: "http://api.wunderground.com/api/c3a3c31a88cc16fa/conditions/q/CA/San_Francisco.json",
  model: App.Models.Forecast,
  setLatLong: function(geoJSON){
    this.latitude = geoJSON.attributes.latitude;
    this.longitude= geoJSON.attributes.longitude;
  },
});
