require.config({
  shim: {
    bootstrap: {
      deps: ['jquery', 'popper'],
      exports: 'bootstrap'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
    backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
    popper: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min',
    bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min',
    handlebars: 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min',
    text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    mytemps: 'templates'
  }
});