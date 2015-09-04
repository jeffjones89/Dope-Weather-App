App.Routers.Forecast = Backbone.Router.extend({
  routes: {
    "": "index",
    "/search": "get"
  },
  initialize: function(){

    App.Collections.forecasts = new App.Collections.Forecasts();
    App.Views.forecastList = new App.Views.ForecastList({collection: App.Collections.forecasts});
    // map = new App.Views.MapView();

  },
  index: function(){
    App.Collections.forecasts.fetch({reset:true});
    console.log(App.Collections.forecasts);
  }
});
