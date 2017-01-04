var db = require('../db/teams');




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


exports.update = function(req,res){
    
    
    db.update(req.body, function(err,model){
        
        if(err){
            res.send(err);
        }
        else{
       
            if(req.xhr){
                req.json(model);
            }
            res.redirect('/teams/team?desc='+model.desc+'');
        }
    });
    
}




exports.table = db.table;