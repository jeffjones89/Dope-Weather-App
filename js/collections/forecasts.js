App.Collections.Forecasts = Backbone.Collection.extend({
	url: "http://api.wunderground.com/api/c3a3c31a88cc16fa/conditions/q/CA/San_Francisco.json",
  /*url: "http://api.wunderground.com/api/c3a3c31a88cc16fa/forecast10day/geolookup/q/" + this.latitiude + ',' + this.longitude + ".json",*/
  model: App.Models.Forecast,
  parse: function(repsonse){
    return response.forecast.simpleforecast.forecastday;
  }
  setLatLong: function(geoJSON){
    this.latitude = geoJSON.attributes.latitude;
    this.longitude= geoJSON.attributes.longitude;
  },
});
