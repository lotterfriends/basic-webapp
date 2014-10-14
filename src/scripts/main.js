requirejs.config({
  baseUrl: 'scripts',
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require(
  [
    'debug'
  ],

  function(debug) {
    // debug.enable(true);
    
    require(['app/boot/page'], function(initialize) {
      initialize();
    });

  }
);