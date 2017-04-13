
var port = process.env.PORT || 3000;


var express = require('express')

var favicon = require('serve-favicon');

var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port dev.env or 3000...')
})
