var db = require('pg');
var teams = require('./teams.js');
//var db = {};
var herokuConnection = "postgres://yncwjsgvfciuvu:60hcxPuBLWdhGv8TCQShQp_qUT@ec2-54-247-121-238.eu-west-1.compute.amazonaws.com:5432/ddjelrft8khh4b";
var teamBase = "postgres://dvzapeelqheaqu:oO5BK3-4tSrIJ-enryi2DbcR8Z@ec2-54-235-108-156.compute-1.amazonaws.com:5432/du0j3d9rj857q"

db.defaults.ssl = true;

exports.connect = function(){

  db.connect(herokuConnection, function(err, client) {

  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  /*
  client
    .query('SELECT * from users')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
    */

});
}


exports.getAllUsers = function(req,res){

    var users = [];
    db.connect(herokuConnection, function(err, client, done) {
       var query = client.query('SELECT * from users2');
        query.on('row', function(row) {
            users.push(row);
        });

        query.on('end',function() {
            client.end();
            res.render('page1',{users:users});
            //next();
        });

        if(err) {
            console.log(err);
            res.json(err);
        }

    });

    //next();
}


exports.addUser = function (req,res) {
    var user = req.body;
    db.connect(herokuConnection, function(err,client,done){
    var results = [];
    var query = client.query("insert into users2 (name) values($1)", [user.name]);

        query.on('row', function (row) {
            results.push(row);
        });

        query.on('end', function () {
            client.end();
            //return res.json(results);
          console.log(user+" added");
            res.json(user);

        });
        if (err) {
            console.log(err);
        }

});

}
/*
exports.createTeamsTable = function (req,res){
    teams.createTable(req,res,db);
}
*/



//users.init(db);

exports.teams = teams;



//exports.getLastId = function() {
//    db.connect(herokuConnection, function(err, client, //done) {
///
//});

//}

exports.createTable = function(){
  db.connect("postgres://yncwjsgvfciuvu:60hcxPuBLWdhGv8TCQShQp_qUT@ec2-54-247-121-238.eu-west-1.compute.amazonaws.com:5432/ddjelrft8khh4b",
    function(err, client) {
    if (err) throw err;
    console.log('Creating table');

    client
      .query('CREATE table users2(id serial,pwd int, name varchar(80));')

  });
}

exports.insertUser = function(){
  db.connect("postgres://yncwjsgvfciuvu:60hcxPuBLWdhGv8TCQShQp_qUT@ec2-54-247-121-238.eu-west-1.compute.amazonaws.com:5432/ddjelrft8khh4b",
    function(err, client) {
    if (err) throw err;
    console.log('Inserting user');

      client.query('INSERT INTO users (id, name) VALUES ($1, $2);', [1, 'Askar'], function (err, result) {
          // done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool
            if (err) {
              console.log('insert error');
            }
})
  });

}


//exports.db = db;
