/*
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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



app.listen(port, function () {
  //console.log(process.env.MONGOLAB_URI);
  console.log('Example app listening on port 3000!!!');
});

*/

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

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
