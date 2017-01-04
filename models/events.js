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

exports.get = function(req, res){
    db.get(req, res);
}


exports.table = db.table;