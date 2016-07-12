var express = require('express');
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





//app.use(favicon('./public/favicon.ico'));

app.get('/', function (req, res) {
  var users_msg = "";
  users.forEach(function(user) {
        users_msg += "Name: " + user.name + " Role: " + user.role+"<br/>";
  });
   res.send(users_msg);
});


app.all('/user/:id/:op?', function(req, res, next) {
    req.user = users[req.params.id];
    if (req.user) {
        next();
    } else {
      //  throw new Error('cannot find user ' + req.params.id);
    }
});


app.get('/user/:id', function(req, res) {
    res.send('viewing ' + req.user.name);
});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
