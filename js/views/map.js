// App.Views.MapView = Backbone.View.extend({
//   template: _.template($('#map-template').html()),
//   render: function () {
//     this.$el.html(this.template());
//
//     var map = L.map(this.$('#map')[0]).setView ([38.8693131,-77.1087531], 15);
//       L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//         maxZoom: 18,
//
//         id: 'jmas13.nbom46l5',
//         accessToken: 'pk.eyJ1Ijoiam1hczEzIiwiYSI6ImNlZDBjZTRkYzk0YzU2MDIwYmExN2EwOTYwZWQyY2Y3In0.OQWLOHZem1gvhuhG7QhEsw'
//         }).addTo(map);
//     return this;
//   },
// });
//
// var mapView = new MapView();
// $('#container').html(mapView.render().el);
