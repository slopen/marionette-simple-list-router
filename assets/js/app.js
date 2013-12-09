define ([

    'jquery',
    'underscore',
    'marionette',
    'router'

], function ($, _, Marionette, createRouter) {

    var app = new Marionette.Application();

    app.addRegions({
      mainRegion : '#main'
    });

    app.addInitializer(function(){

      app.router = createRouter(app);

      $(document).on('click', 'a', function (){
        // links click to router navigate
        app.router.navigate( $(this).attr('href'), true );
        return false;
      });

      Backbone.history.start ();   

      console.log('application started...');
      
    });


    return window.app = app;

}); 