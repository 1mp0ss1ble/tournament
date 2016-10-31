var express = require('express')
  , router  = express.Router()
  , db      = require('../db');   


router.get('/', function(req, res){
    //res.write('Loading..');
    db.getAllUsers(req,res);
});


router.get('/register', function(req, res, next) {
    res.sendFile(__dirname + '/views/register.html');
    //res.send("FFFS");
});

router.post('/addUser', function(req, res, next)  {
    console.log(req.body);
    db.addUser(req,res);
});


router.get('/user/:id', function(req, res) {
    res.send('viewing ' + req.user.name);
});

module.exports = router;
