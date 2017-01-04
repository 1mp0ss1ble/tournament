define(function(require){
    var init, baseUrl, teamId;
    
    
    init = function(id, baseUrl){
        
        baseUrl = baseUrl;
        teamId = id;
        
        console.log('module team init');
        
        //load players
        /*
        $.get(baseUrl+'players',{teamId:teamId},function(res){
            console.log(teamId);
            console.log(res.players);
            
            var $el = $('#team-players');
            var $ul = $('#team-players').find('ul');
            
            res.players.forEach(function(player){
               $ul.prepend('<li><a href="'+baseUrl+'players/'+player.id+'">'+  player.name +'</a></li>') 
            });
        })
        
        */
    }
    
    
    return {init: init};
})