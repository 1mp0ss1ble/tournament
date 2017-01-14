define(function(require){
  'use strict';    

  
  var init;
    
  var baseUrl =  window.location.protocol + "//" + window.location.host + "/";

    
    
  //var ff = require('./app/lib/modulezz');
  
  var team = require('./app/modules/team');
    
  var player = require('./app/modules/player');
    
  var options = require('./app/modules/options');    
 
  var events = require('./app/modules/events');    
    
    
  //ff.init();
    
    
  var clientUrl = location.pathname.substr(1,location.pathname.length).split('/');    
    
  //console.log(clientPath);
    
   
 init = function (){
      
 if(clientUrl[0] === "teams"){
     team.init(clientUrl[1], baseUrl);
 } 
 else if(clientUrl[0] === "players"){
     player.init(clientUrl[1], baseUrl);
 
 }
 else if(clientUrl[0] === "options"){
     options.init(clientUrl[1], baseUrl);
 }
 
 else if(clientUrl[0] === "events"){
     events.init(clientUrl[1], baseUrl);
 }
 
  
 else{
     
  $('body').css('color','green');
      
  var $teams = $('#teamsList');
      
  $teams.prepend('<option>loading...</option>');
      
  
  $.get( baseUrl + "teams", function(data){
    console.log(data.teams); 
      $teams.empty();
      data.teams.forEach(function(team){
        $teams.append('<option value='+team.id+'>'+team.description+'</option>');        
      });
    
  });   

}    
      
  //console.log(;
      
  /*
      $.ajax({
          url: baseUrl + 'teams/api/get',
          type: 'GET',
          contentType: 'application/json',
          complete: function(data){
              console.log(data);
          }
      })
    */  
  
  
  }

  
  
  
  return { init:init };
   
});