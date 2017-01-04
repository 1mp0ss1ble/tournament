var mongoose = require('mongoose')
  , config   = require('./config').config;

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
});

var Model = mongoose.model('events',Schema);

conn.on('error', console.error.bind(console, 'connection error:')); 





exports.getAll = function(cb){
    Model.find(function(err, events){
        cb(err, events);
    });
}

/*
exports.getAll = function(req, res){
  var events = [];
    db.connect(eventBase, function(err, client, done) {
       var query = client.query('SELECT * from events');
        query.on('row', function(row) {
            events.push(row);
        });
        
        query.on('end',function() {
            client.end(); 
            if(req.xhr){
                res.json({events:events});
            }else{
                res.render('events/events.jade',{events:events});    
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
exports.get = function(req, res){
  var event = {};
    var id = req.params.id;
    db.connect(eventBase, function(err, client, done) {
       var query = client.query('SELECT * from events where id=$1',[id]);
        query.on('row', function(row) {
            event = row;
        });
        
        query.on('end',function() {
            client.end(); 
            if(req.xhr){
                res.json(event);
            }
            else{
                res.render('events/event.jade',{ event: event });
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
    var event = req.body;
    var currDate = new Date().toJSON().slice(0,10);
    
    db.connect(eventBase, function(err, client) {
    if (err) throw err;
    console.log('Adding event...');

      var query = client.query('INSERT INTO events (description,rating,createdOn) VALUES ($1,1000,CURRENT_DATE);', [event.description]);
        
       
        
        query.on('end', function () {
            client.end();
            //return res.json(results);
          console.log(event.description+" added");
            res.redirect('/events');
            
        });
        if (err) {
            console.eror(err);
        }
        
  });
}

*/

/* --------------/ Table Operations  /---------------- */

/*
 table.create = function(req, res){
  db.connect(eventBase, function(err, client) {
    if (err) throw err;
    console.log('Creating events table');

    var query = client
      .query('CREATE table events(id serial, description varchar(200),rating int,'
             +'cityId int,creatorId int, createdon varchar(80),status int, prop3 varchar(300));');
      
      query.on('end',function(){
          res.end('events table has been createed');
      })

  });
};


 table.delete = function(req,res){
  db.connect(eventBase, function(err, client){
    if(err) throw err;
      var query = client.query('drop table events');
      query.on('end',function(){
          client.end();
           res.end('dropped');
      })
  }); 
};
 
 exports.table = table;
*/

/* ------------------------------ */
