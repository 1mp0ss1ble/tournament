define(function(require){
    var init, baseUrl, teamId;
    
    
    init = function(id, baseUrl){
        
        baseUrl = baseUrl;
       // teamId = player.teamId;
        
        console.log('module player init');
        
        console.log(player);
        
        
        //load players
        $.get(baseUrl+'teams',function(res){
            console.log(teamId);
            console.log(res.teams);
            
            var $el = $('#player-teams');
            var $ul = $('#player-teams').find('ul');
            
            
            res.teams.forEach(function(team){
               // if(team.id == teamId)
                $ul.prepend('<li><a href="'+baseUrl+'teams/'+team.id+'">'+  team.description +'</a></li>') 
            });
        })
        
        
    }
    
    
    return {init: init};
})