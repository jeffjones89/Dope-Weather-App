App.Routers.Forecast = Backbone.Router.extend({
  routes: {
    "": "index",
    "/search": "get"
  },
  initialize: function(){
    map = new App.Views.MapView();
  },
  getWeather: function(){

  }
});
