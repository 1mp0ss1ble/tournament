var db = require('../db/events');


exports.add = function(req, res){
    //var team = res.body;
    db.add(req, res);
}


exports.getAll = function(req, res){
    db.getAll(function(err, events){
       if(req.xhr){
                res.json({events: events});
            }else{
                res.render('events/events.jade',{events: events});    
            }
    });
}

exports.get = function(req, cb){
    if(req.params.desc)
     db.searchByDesc(req.params.desc, cb);
}



exports.add = function(event, cb){
   
   db.searchByDesc(description, function(err, result){
    if(err) return cb(err);
     
    !result 
     ? db.add({desc: description}, cb)
     : cb('Error: ' + desc + ' already exists!') 
    
   });
 
}

exports.table = db.table;