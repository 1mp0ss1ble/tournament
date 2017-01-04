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
    
    
    return { api: api};
    
})