App = {
  Views: {},
  Collections: {},
  Models: {},
  Routers: {}
}

$.getJSON('http://api.wunderground.com/api/c3a3c31a88cc16fa/forecast10day/forecastday/q/CA/San_Francisco.json', function(response){
  console.log(response.forecast.simpleforecast.forecastday);
})

$(document).ready(function(){

});
