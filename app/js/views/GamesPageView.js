define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!../../templates/GamesPageView.handlebars',
  'text!../../templates/exampleEach.handlebars'
], function($, _, Backbone, Handlebars, gamesPageViewTemplate, exampleEachTemplate) {
  var gamesPageView = Backbone.View.extend({
    tagName: "ul",
    el: $('body'),

    initialize: function() {
      _.bindAll(this, 'render');
      //this.collection.bind("change", this.render());  //why is this causing a duplicate render
      this.render();
    },

    render: function() {
      var gamesPageViewCompiledTemplate = Handlebars.compile(gamesPageViewTemplate);
      var gamesPageHtml = gamesPageViewCompiledTemplate({Games: this.collection.toJSON()});
      $('body').html(gamesPageHtml);
    }
  });

  return gamesPageView;
}); 