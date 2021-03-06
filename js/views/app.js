App.Views.App = Backbone.View.extend({
  el: 'body',
  events: {
    'click #submit': 'captureInput'
  },
  initialize: function(){

  },
  captureInput: function(){
    event.preventDefault();
    this.state = $('#stateSearch').val();
    this.city = $('#citySearch').val();
    this.getWeather();
  },
  getWeather: function(){
    App.Collections.forecasts = new App.Collections.Forecasts();
    App.Collections.forecasts.url = "http://api.wunderground.com/api/c3a3c31a88cc16fa/forecast10day/forecastday/q/" + this.state +'/'+this.city+".json"
    App.Views.forecastList = new App.Views.ForecastList({collection: App.Collections.forecasts});
    App.Collections.forecasts.fetch({reset: true});
  }
})
