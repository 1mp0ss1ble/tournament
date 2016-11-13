var db       = require('pg')
  , teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"
  , table    = {};



exports.getAll = function(req, res){
  var teams = [];
    db.connect(teamBase, function(err, client, done) {
       var query = client.query('SELECT * from teams order by rating desc, description asc');
        query.on('row', function(row) {
            teams.push(row);
        });
        
        query.on('end',function() {
            client.end(); 
            if(req.xhr){
                res.json({teams:teams});
            }else{
                res.render('teams/teams.jade',{teams:teams});    
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
  var team = {};
    var id = req.params.id;
    db.connect(teamBase, function(err, client, done) {
       var query = client.query('SELECT * from teams where id=$1',[id]);
        query.on('row', function(row) {
            team = row;
        });
        
        query.on('end',function() {
            client.end(); 
            if(req.xhr){
                res.json(team);
            }
            else{
                res.render('teams/team.jade',{ team: team });
            }
            //next();
        });
        
        if(err) {
            console.log(err);
            res.json(err);
        }
            
    }); 
    
};



exports.add  = function(req,res){
    var team = req.body;
    var currDate = new Date().toJSON().slice(0,10);
    
    db.connect(teamBase, function(err, client) {
    if (err) throw err;
    console.log('Adding team...');

      var query = client.query('INSERT INTO teams (description,rating,createdOn) VALUES ($1,$2,CURRENT_DATE);', [team.description,team.rating]);
        
        /* 
        query.on('row', function (row) {
            results.push(row);
        });
        */
        
        query.on('end', function () {
            client.end();
            //return res.json(results);
          console.log(team.description+" added");
            res.redirect('/teams');
            
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
    console.log('Creating teams table');

    var query = client
      .query('CREATE table teams(id serial, description varchar(200),rating int,'
             +'captainId int,creatorId int, createdon varchar(80), prop3 varchar(300));');
      
      query.on('end',function(){
          res.end('team table has been createed');
      })

  });
};


 table.delete = function(req,res){
  db.connect(teamBase, function(err, client){
    if(err) throw err;
      var query = client.query('drop table teams');
      query.on('end',function(){
          client.end();
           res.end('dropped');
      })
  }); 
};
 
 exports.table = table;

/* ------------------------------ */
