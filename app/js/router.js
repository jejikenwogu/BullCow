define([
  'backbone',
  'views/GamesPageView'
], function(Backbone, GamesPageView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'games': 'showGames',
      'game/:id': 'showGame'
    },

    showGames: function() {
      var tempCollection = new Backbone.Collection([
        {
          id: 1,
          p1: 'John',
          p2: 'Shan'
        },
        {
          id: 2,
          p1: 'John',
          p2: 'Kenter'
        }
      ]);
      var gamesPage = new GamesPageView({collection: tempCollection});
    },

    showGame: function(id) {
    }
  });

  var initialize = function() {
    var appRouter = new AppRouter();
    Backbone.history.start();
  }

  return {
    initialize: initialize
  };
});