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





//////////

/*
var human = {
    species : "human",
    create : function( values ){
      var instance = Object.create(this);
      Object.keys(values).forEach(function(key){
         instance[key] = values[key]; 
      });
      return instance;
    },
    sayName : function(){
        console.log(this.name);
    },
    saySpecies : function (){
        console.log(this.species);
    }
}


var musician = human.create({
   species : "musician",
   playInstrument : function(){
       console.log("playing " + this.instrument);
   }    
}); 

var will = musician.create({
    name : "Willde",
    instrument : "Violin"
});
*/

