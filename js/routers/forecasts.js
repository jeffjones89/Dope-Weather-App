App.Routers.Forecast = Backbone.Router.extend({
  routes: {
    "": "index",
    "search/:state/:city": "setLocation"
  },
  initialize: function(){

    // App.Collections.forecasts = new App.Collections.Forecasts();
    // App.Views.forecastList = new App.Views.ForecastList({collection: App.Collections.forecasts});
    // map = new App.Views.MapView();

  },
  index: function(){
    // console.log(App.Collections.forecasts);
    // App.Collections.forecasts.fetch({reset:true});
  },
//   setLocation: function(state, city){
//     App.Collections.forecasts.fetch({reset:true});
//   }
});
