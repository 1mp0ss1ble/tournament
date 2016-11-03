var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , events = require('../models/events');



router.get('/', function(req, res){
   events.getAll(req,res);
    //res.end("events");
});

router.get('/:id(\\d+)/', function(req, res){
   events.get(req,res);
});

//router.use(express.static(__dirname+'/views'))


router.get('/add',function(req, res){
   //res.sendFile('teams/add.html'); 
   //res.sendFile(path.join(__dirname, '../views/events', 'add.jade'));
    res.render("events/add");
});

router.post('/add', function(req,res){
    events.add(req, res);
});

router.get('/deleteTable',function(req,res){
    events.table.delete(req,res);
});

router.get('/createTable',function(req,res){
    events.table.create(req,res);
});



module.exports = router;