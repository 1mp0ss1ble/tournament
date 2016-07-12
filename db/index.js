var db = require('pg');
//var db = {};

db.defaults.ssl = true;
exports.connect = function(){
db.connect("postgres://yncwjsgvfciuvu:60hcxPuBLWdhGv8TCQShQp_qUT@ec2-54-247-121-238.eu-west-1.compute.amazonaws.com:5432/ddjelrft8khh4b", function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT * from users')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
}


exports.createTable = function(){
  db.connect("postgres://yncwjsgvfciuvu:60hcxPuBLWdhGv8TCQShQp_qUT@ec2-54-247-121-238.eu-west-1.compute.amazonaws.com:5432/ddjelrft8khh4b",
    function(err, client) {
    if (err) throw err;
    console.log('Creating table');

    client
      .query('CREATE table users(id int,pwd int, name varchar(80));')

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


exports.db = db;
