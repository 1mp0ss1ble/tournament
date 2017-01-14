define(function(){
    var api;
    
    api = {};
    
    function request(url, cb){
      $.getJSON(url, function(data){
          cb(data);
      })
    }
          
    	 
    api.getEvents = function(cb){
      var url = '/events';
      request(url, cb);
    }
     	
    api.getSeason = function(desc, cb){
     var url = "/seasons/season/"+encodeURI(desc);
     request(url,cb);
    }
    
    
    api.getSeasons = function(parentId, cb){
     var url = '/seasons/parent/'+parentId;
     request(url, cb);
    }
    
    return { api: api};
    
}) 