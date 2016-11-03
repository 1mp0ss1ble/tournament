define(function(require){
    var init, baseUrl, teamId;
    
    
    init = function(id, baseUrl){
        
        baseUrl = baseUrl;
        
        var player = local_data;
       // teamId = player.teamId;
        
        console.log('module player init');
        
        console.log(player);
        
        var $ul = $('#player-teams').find('ul');
        $ul.append('loading...')
        //load players
        $.get(baseUrl+'teams',function(res){
            console.log(teamId);
            console.log(res.teams);
            
            var $el = $('#player-teams');
            var $ul = $('#player-teams').find('ul');
           
            $ul.empty();
            
            
            
            console.log(res.teams.length);    
            
            res.teams.forEach(function(team){
                if(team.id == player.teamid)
                $ul.append('<li><a href="'+baseUrl+'teams/'+team.id+'">'+  team.description +'</a></li>') 
            });
              
            if(!$ul.children('li').length){    
                $ul.append("No team");
            }
            
        })
        
        
    }
    
    
    return {init: init};
})