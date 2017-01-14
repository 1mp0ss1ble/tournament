var db = require('../db/seasons');




exports.get = function(model, cb){
// var obj = {'id': req.params.id};
   console.log(model);
     db.findOne(model, cb);
}



exports.getByParent = function(parentId, cb){
 var obj = {'parentId': parentId};
 
 db.find(obj, cb);
}