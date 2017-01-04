var //db       = require('pg')
   mongoose = require('mongoose')
  , config   = require('./config').config
  , teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"
  , table    = {};

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://writer:Qwerty11@ds161295.mlab.com:61295/soccer';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection; 

var Schema = new mongoose.Schema({
    id : String,
    desc : String,
    rating : Number,
    sponsor : String,
    captain : String
});

var Model = mongoose.model('teams',Schema);

conn.on('error', console.error.bind(console, 'connection error:')); 



/*
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

*/

exports.getAll = function(req, res) {
    /*
    var options = {
    url: "https://api.mlab.com/api/1/databases/soccer/collections/teams?apiKey="
         +config.key,
    method: "GET"
    };
    
    http.request(options,function(res){
        req.send(JSON.stringify(res));
    })
    */
    
    Model.find(function(err, data){
              // res.end(JSON.stringify(data));
        res.render('teams/teams.jade',{teams:data});
               })
}


exports.get = function(req,res) {
     var val = req.query.desc.toLowerCase();
     var query = {};
     
     Model.findOne({desc : val}, function(err, team){
         //if(err) res.end(err.toString());
        //res.render(JSON.stringify(team));
        //res.render('teams/teams.jade',{teams:team});
         console.log(team);
          if(req.xhr){
                res.json(team);
            }
            else{
                res.render('teams/team.jade',{ team: team });
            }
         
         
     })
}



/*
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

*/


/*
exports.add  = function(req,res){
    var team = req.body;
    var currDate = new Date().toJSON().slice(0,10);
    
    db.connect(teamBase, function(err, client) {
    if (err) throw err;
    console.log('Adding team...');

      var query = client.query('INSERT INTO teams (description,rating,createdOn) VALUES ($1,$2,CURRENT_DATE);', [team.description,team.rating]);
        
        
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

*/

exports.add= function(req, res) {
    var team = new Model( req.body );
    team.id = team._id;
    team.save(function(err){
        res.redirect('/teams');
    })
}


exports.update = function(model, cb){
    
    console.log(model);
    var dsc = model.desc.toLowerCase();
    
    Model.findOne({desc: dsc},function(err,team){
        console.log('updating');
        console.log(team);
        console.log(model);
        if(!team || team._id.toString() === model._id){
            Model.findById(model._id, function(err, team){
                team.desc = dsc;
                team.sponsor = model.sponsor;
                team.captain = model.captain;
                team.save();
                cb(err, model);
            })
        }else{
            cb("Duplicate desc!");
        }
    })
}

/* --------------/ Heroku Postgre Table Operations  /---------------- */

/*
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
 */
 exports.table = table;

/* ------------------------------ */
