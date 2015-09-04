App.Views.App = Backbone.View.extend({
  el: 'body',
  events: {
    'click #submit': 'captureInput'
  },
  initialize: function(){

  },
  captureInput: function(){
    event.preventDefault();
    state = $('#stateSearch').val();
    city = $('#citySearch').val();
    App.Collections.forecasts = new App.Collections.Forecasts();
    App.Collections.forecasts.url = "http://api.wunderground.com/api/c3a3c31a88cc16fa/forecast10day/forecastday/q/" + state +'/'+city+".json";
    console.log(App.Collections.forecasts.url);
    this.getWeather();
  },
  getWeather: function(){
    // App.Collections.forecasts = new App.Collections.Forecasts();
    // App.Views.forecastList = new App.Views.ForecastList({collection: App.Collections.forecasts});
    // console.log(App.Views.forecastList.url);
    console.log(App.Collections.forecasts)
    App.Views.forecastList = new App.Views.ForecastList({collection: App.Collections.forecasts});
    App.Collections.forecasts.fetch({reset: true});
  }
})
