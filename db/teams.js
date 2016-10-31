<<<<<<< HEAD
var db       = require('pg')
  , teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"
  , table    = {};


=======
var teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"

var db;

exports.init = function(_db){
    db = _db;
}
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08

exports.getAll = function(req, res){
  var teams = [];
    db.connect(teamBase, function(err, client, done) {
       var query = client.query('SELECT * from teams');
        query.on('row', function(row) {
            teams.push(row);
        });
        
        query.on('end',function() {
            client.end(); 
<<<<<<< HEAD
            if(req.xhr){
                res.json({teams:teams});
            }else{
                res.render('teams/teams.jade',{teams:teams});    
            }
            
            
=======
            res.render('teams/teams.jade',{teams:teams});
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08
            //next();
        });
        
        if(err) {
            console.log(err);
            res.json(err);
        }
            
    }); 
    
};


<<<<<<< HEAD
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



=======
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08
exports.add  = function(req,res){
    var team = req.body;
    var currDate = new Date().toJSON().slice(0,10);
    
    db.connect(teamBase, function(err, client) {
    if (err) throw err;
<<<<<<< HEAD
    console.log('Adding team...');
=======
    console.log('Adding team..');
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08

      var query = client.query('INSERT INTO teams (description,rating,createdOn) VALUES ($1,1000,CURRENT_DATE);', [team.description]);
        
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



<<<<<<< HEAD
/* --------------/ Table Operations  /---------------- */


 table.create = function(req, res){
=======
 exports.createTable = function(req, res){
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08
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


<<<<<<< HEAD
 table.delete = function(req,res){
=======
exports.deleteTable = function(req,res){
>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08
  db.connect(teamBase, function(err, client){
    if(err) throw err;
      var query = client.query('drop table teams');
      query.on('end',function(){
          client.end();
           res.end('dropped');
      })
  }); 
};
<<<<<<< HEAD
 
 exports.table = table;

/* ------------------------------ */
=======



>>>>>>> 62fbe8c5314a83e6cd2c0c30ceb49653798adc08
