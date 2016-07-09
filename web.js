var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var port = process.env.PORT || 8080;

app.use(favicon('./public/favicon.ico'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
