define(function(){
'use strict';    
   var init;
    
   console.log('moduless');
    
    init = function (){
        
         $('body').css('color','red');
    };
    
    var a =1;
    return { init: init };
});