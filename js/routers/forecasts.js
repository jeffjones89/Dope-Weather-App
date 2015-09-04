App.Routers.Forecast = Backbone.Router.extend({
  routes: {
    "": "index",
    "/search": "get"
  },
  initialize: function(){
    forecasts = new App.Collections.Forecasts();
    forecastList = new App.Views.ForecastList({collecetion: forecasts});
    map = new App.Views.MapView()
	}
});
