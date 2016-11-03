var db = require('../db/events');




exports.add = function(req, res){
    //var team = res.body;
    db.add(req, res);
}


exports.getAll = function(req, res){
    db.getAll(req, res);
}

exports.get = function(req, res){
    db.get(req, res);
}


exports.table = db.table;