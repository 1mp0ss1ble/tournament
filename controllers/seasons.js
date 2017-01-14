var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , model = require('../models/seasons');



router.get('/parent/:id', function(req, res){
  
  model.getByParent(req.params.id, function(err, seasons){
   if(err) res.end(err);
   
   if(req.xhr) res.json(seasons);
   
  })
});




router.get('/season/:_id', function(req, res){
   
   model.get(req.params, function(err, season){
    
    if(err) res.end(err);
    
    //console.log(season);
    res.render('seasons/season.jade',{model: season});
    
   });
    
});



router.get('/getModal',function(req,res){
    //res.send(req.query.desc.toLowerCase());
    res.render('seasons/add.jade');
});



module.exports = router;