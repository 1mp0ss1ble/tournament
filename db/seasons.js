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
    parentId : String,
    sponsor : String,
    year : String,
});

var Model = mongoose.model('seasons',Schema);

conn.on('error', console.error.bind(console, 'connection error:')); 



exports.find = function(criteria, cb){
 Model.find(criteria, cb);
}

exports.findOne = function(criteria, cb){
 Model.findOne(criteria, cb);
}


exports.getAll = function(cb){
    Model.find(function(err, events){
        cb(err, events);
    });
}


exports.searchByDesc = function(description, cb){
 description = description.trim().toLowerCase();
 
 Model.findOne({desc:description}, cb);
}

exports.getById = function(id, cb){
 Model.findById(id, cb);
}


exports.add = function(model, cb){
  var event = new Model(model);
  event.save(cb);
}


