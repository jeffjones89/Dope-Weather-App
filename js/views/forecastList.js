App.Views.ForecastList = Backbone.View.extend({
  el: '#forecasts',
  views: [],
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne)
  },
  renderAll: function(){
    console.log('running');
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(forecast){
    var view = new App.Views.Forecast({model: forecast});
    this.views.push(view);
    this.$el.append(view.$el);
  }
});
