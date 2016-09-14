var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db');
//db.createTable();
//db.insertUser();
db.connect();
//var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var users = [{
        name: 'Nurzhinho',
        role: 'Moderator'
    },
    {
        name: 'Askaro',
        role: 'Developer'
    }
];

var myLogger = function(req,req,next){
  //console.log(req);  
  next();
};

app.use(myLogger);


app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');


//app.use(favicon('./public/favicon.ico'));

app.get('/', function (req, res, next) {
  //db.getAllUsers(req,res);
 // var users_msg = "";
 // users.forEach(function(user) {
 //       users_msg += "Name: " + user.name + " Role: " + user.role+"<br/>";
 // });
 //   res.send(users_msg);
    //db.createTable();
    //db.adddUser();
    //console.log('fff');
 //db.getAllUsers(req,res);    
res.end('Main Page');
});

/*
app.get("/createTeamsTable",function(req,res){
        //db.createTeamsTable(req,res);
    ;
        res.end('not found');
});
*/

app.get('/teams', function(req,res){
   db.teams.getAll(req,res);
});

app.get('/addTeam',function(req, res){
   res.sendFile(__dirname+'/views/teams/add.html'); 
});

app.post('/addTeam', function(req,res){
    db.teams.add(req, res);
});

app.get('/deleteTeamsTable',function(req,res){
    db.teams.deleteTable(req,res);
});

app.get('/createTeamsTable',function(req,res){
    db.teams.createTable(req,res);
});


app.get("/users", function(req, res){
    //res.write('Loading..');
    db.getAllUsers(req,res);
});


app.get('/register', function(req, res, next) {
    res.sendFile(__dirname + '/views/register.html');
    //res.send("FFFS");
});

app.post('/addUser', function(req, res, next)  {
    console.log(req.body);
    db.addUser(req,res);
});


app.get('/user/:id', function(req, res) {
    res.send('viewing ' + req.user.name);
});


app.listen(port, function () {
  //console.log(process.env.MONGOLAB_URI);    
  console.log('Example app listening on port 3000!!!');
});

