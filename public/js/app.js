'use strict';

requirejs.config({
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    
    baseUrl: '/js',
    paths: {
        jquery : '../vendor/bower_components/jquery/dist/jquery.min',
        app: './app',
        test: './app/lib/test',
        
    }
    
    
});



requirejs(['app/main']);

