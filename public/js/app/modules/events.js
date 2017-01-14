define(function(require){
 var init, db, jqMap, model, slice;
 
 
 slice = [].slice;
 
 model = local_data;
 
 db = require('./db').api;
 
 jqMap = {
  $seasonDiv : $('#event-season-content'),
  $allSeasonsDiv :  $('#event-seasons'),
 }
 

 function handleHash(){
  var hash = location.hash.replace('#','');
  
  var arr = hash.split('/');
  
  
  if(arr.length === 2 && arr[0] === 'season') {
   jqMap.$seasonDiv.load("/seasons/season/"+encodeURI(arr[1]));
   //db.getSeason(arr[1], showSeason); 
  }
  
  
 }
 
 
 function showSeason(content) {
  //console.log(JSON.stringify(season));
  jqMap.$seasonDiv.load(content);
 }
 
 function showNewSesasonForm(){
  $('#myModal').load('/seasons/getModal?type=newseason');
 }
 
 
 function showAllSeasons(seasons) {
  var arr = slice.call(seasons);
  jqMap.$allSeasonsDiv.empty();
  
  if(!arr.length) {
   jqMap.$allSeasonsDiv.html('empty...');
   return;
  }
  
  var $ul = $('<ul></ul>');
  
  seasons.forEach(function(obj){
   $ul.append('<li><a href="#season/'+obj._id+'">'+obj.desc+'</a></li>');
  });
  
  jqMap.$allSeasonsDiv.append($ul);
 }
 
 
 init = function(){  
  
  $(document).ready(function() {
   
   $(window).on('hashchange', handleHash);
   $(window).trigger('hashchange');
   db.getSeasons(model._id, showAllSeasons)
   jqMap.$allSeasonsDiv.html("loading...");
   
  });
  
  
  $('#modal-newseason').click(showNewSesasonForm);
  
  
 }
 
 return {init : init };
 
})