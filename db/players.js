var db       = require('pg')
  , teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"
  , table    = {};



exports.getAll = function(req, res){
  var players = [];
    var teamId = req.query.teamId;
    
    var queryText = 'SELECT * from players';
    
    
    if(teamId)
                queryText += ' where teamId =' + teamId; 
            
    
    db.connect(teamBase, function(err, client, done) {
       var query = client.query(queryText);
        query.on('row', function(row) {
            players.push(row);
        });
        
        query.on('end',function() {
            client.end(); 
            if(req.xhr){
                res.json({players: players});
            }
            else{
                res.render('players/players.jade',{players: players});
            }
            //next();
        });
        
        if(err) {
            console.log(err);
            res.json(err);
        }
            
    }); 
    
};


exports.get = function(req, res){
  var player = {};
    var id = req.params.id;
    console.log('player id: ' + id);
    db.connect(teamBase, function(err, client, done) {
       var query = client.query('SELECT * from players where id=$1',[id]);
        query.on('row', function(row) {
            player = row;
        });
        
        query.on('end',function() {
            client.end(); 
            res.render('players/player.jade',{ player: player });
            //next();
        });
        
        if(err) {
            console.log(err);
            res.json(err);
        }
            
    }); 
    
};



exports.add  = function(req,res){
    var player = req.body;
    var currDate = new Date().toJSON().slice(0,10);
    
    db.connect(teamBase, function(err, client) {
    if (err) throw err;
    console.log('Adding player...');
    console.log('with team id:' + player.teamId);

      var query = client.query('INSERT INTO players (name,teamId, rating,createdOn) VALUES ($1,$2,1000,CURRENT_DATE);', [player.name, player.teamId]);
        
        /* 
        query.on('row', function (row) {
            results.push(row);
        });
        */
        
        query.on('end', function () {
            client.end();
            //return res.json(results);
          console.log(player.name+" added");
            res.redirect('/players');
            
        });
        if (err) {
            console.eror(err);
        }
        
  });
}



/* --------------/ Table Operations  /---------------- */


 table.create = function(req, res){
  db.connect(teamBase, function(err, client) {
    if (err) throw err;
    console.log('Creating players table');

    var query = client
      .query('CREATE table players(id serial, name varchar(200),rating int,'
             +'teamId int,team2Id int,creatorId int, createdon varchar(80), prop3 varchar(300));');
      
      query.on('end',function(){
          res.end('players table createed');
      })

  });
};


 table.delete = function(req,res){
  db.connect(teamBase, function(err, client){
    if(err) throw err;
      var query = client.query('drop table players');
      query.on('end',function(){
          client.end();
           res.end('players table dropped');
      })
  }); 
};
 
 exports.table = table;

/* ------------------------------ */
