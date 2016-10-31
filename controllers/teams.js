var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , teams = require('../models/teams');



router.get('/', function(req, res){
   teams.getAll(req,res);
});

router.get('/:id(\\d+)/', function(req, res){
   teams.get(req,res);
});

//router.use(express.static(__dirname+'/views'))


router.get('/add',function(req, res){
   //res.sendFile('teams/add.html'); 
   res.sendFile(path.join(__dirname, '../views/teams', 'add.html'));
});

router.post('/add', function(req,res){
    teams.add(req, res);
});

router.get('/deleteTable',function(req,res){
    teams.table.delete(req,res);
});

router.get('/createTable',function(req,res){
    teams.table.create(req,res);
});



module.exports = router;