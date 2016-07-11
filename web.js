var express = require('express');
var app = express(); 
//var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var users = [{
    name: 'Nurzhinho'
}];


//app.use(favicon('./public/favicon.ico'));
app.get('/', function (req, res) {
  res.send('Hello Ichi!');
});


app.all('/user/:id/:op?', function(req, res, next) {
    req.user = users[req.params.id];
    if (req.user) {
        next();
    } else {
        next(new Error('cannot find user ' + req.params.id));
    }
});


app.get('/user/:id', function(req, res) {
    res.send('viewing ' + req.user.name);
});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
