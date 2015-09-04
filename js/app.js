App = {
  Views: {},
  Collections: {},
  Models: {},
  Routers: {}
}

$(document).ready(function(){
<<<<<<< Updated upstream
  $('.submit').on('click', function(){
    
  })
=======
  App.Routers.song = new App.Routers.Forecast();
	Backbone.history.start();
	console.log('document loaded and ready!')
>>>>>>> Stashed changes
});
