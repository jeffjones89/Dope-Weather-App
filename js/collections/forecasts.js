App.Collections.Forecasts = Backbone.Collection.extend({
  // constructor: function(url){
  //   this.url = url;
  //
  // },
  model: App.Models.Forecast,
  parse: function(response){
		console.log(response.forecast.simpleforecast.forecastday);
    return response.forecast.simpleforecast.forecastday;
  },
  url: this.url
});
