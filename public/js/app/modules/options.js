define(function(require){
    var db, init, baseUrl, teamId;
    
    
    db = require('./db').api;
    
    function handleHash(e){
        
        var hash = location.hash.replace('#','').split('/');
        
        
        if(hash.length === 2 && hash[0] === 'modal') {
           var dest = hash[1];
      
            $('#myModal').load('/options/getModal?desc='+dest+'');
          
           
        }
       
    }
    
    init = function(id, baseUrl){
        
        baseUrl = baseUrl;
        
        var player = local_data;

        $(window).on('hashchange', handleHash);
        
        
        $('#modal-event').click(function(){
            location.hash = "#modal/event";
            $(window).trigger('hashchange');
            
        });
        
        
        db.getEvents(function(events){
            console.log(events);
        })
    }
    
    
    return {init: init};
})