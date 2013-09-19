requirejs.config({
  paths: {
    jquery: 'lib/jquery/jquery',
    underscore: 'lib/underscore/underscore',
    backbone: 'lib/backbone/backbone',
    bootstrap: 'lib/bootstrap/dist/js/bootstrap',
    handlebars: 'lib/handlebars/handlebars',
    text: 'lib/requirejs-text/text'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'bootstrap': ['jquery']
  }
});

require([
  'app'
], function(App) {
  App.initialize();
});