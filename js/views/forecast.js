App.Views.Forecast = Backbone.View.extend({
  className: 'forecast',
  tagName: 'div',

  initialize: function(){
    var source = $('#forecastTemplate').html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
