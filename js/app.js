App = {
  Views: {},
  Collections: {},
  Models: {},
  Routers: {}
};

$(document).ready(function(){
  App.Routers.forecast= new App.Routers.Forecast();
	Backbone.history.start();
	appView = new App.Views.App();
});
