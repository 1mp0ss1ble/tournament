var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , model = require('../models/options');



router.get('/', function(req, res){
   //model.getAll(req,res);
    res.render('options/options.jade',{events: 1});    
});




router.get('/getModal',function(req,res){
    //res.send(req.query.desc.toLowerCase());
    res.render('options/modals/event.jade');
});


router.post('/create',function(req,res){
   model.save(req.body,function(err, model){
    res.redirect('events/event?desc="'+model.desc+'"')
   });
});




module.exports = router;