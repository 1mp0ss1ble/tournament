var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , players = require('../models/players');



router.get('/', function(req, res){
   players.getAll(req,res);
});

router.get('/:id(\\d+)/', function(req, res){
   players.get(req,res);
});

//router.use(express.static(__dirname+'/views'))


router.get('/add',function(req, res){
   //res.sendFile('teams/add.html'); 
   //res.sendFile(path.join(__dirname, '../views/players', 'add.html'));
    res.render('players/add.jade');
});

router.post('/add', function(req,res){
    players.add(req, res);
});

router.get('/deleteTable',function(req,res){
    players.table.delete(req,res);
});

router.get('/createTable',function(req,res){
    players.table.create(req,res);
});





module.exports = router;