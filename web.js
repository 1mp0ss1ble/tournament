var express = require('express');
var app = express(); 
//var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;

//app.use(favicon('./public/favicon.ico'));
app.get('/', function (req, res) {
  res.send('Hello Ichi!');
});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
