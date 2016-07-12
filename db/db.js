var pg = require('pg');
var DATABASE_URL = 'postgres://localhost:5432/my-database-name';

function query(sql, params, cb) {
  pg.connect(DATABASE_URL, function(err, client, done) {
    if (err) {
      done(); // release client back to pool
      cb(err);
      return;
    }
    client.query(sql, params, cb);
  });
}

// returns user object if found, else returns undefined
exports.findUserById = function(id, cb) {
  var sql = `
    SELECT *
    FROM users
    WHERE id = $1
  `;

  query(sql, [id], function(err, result) {
    if (err) return cb(err);
    cb(null, result.rows[0]);
  });
};

// returns created user object
exports.insertUser = function(data, cb) {
  var sql = `
    INSERT INTO users (username, hashed_password)
    VALUES ($1, $2)
    RETURNING *  -- tells postgres to return the created user record to us
  `;

  bcrypt.hashPassword(data.password, function(err, hashedPassword) {
    if (err) return cb(err);
    query(sql, [data.username, hashedPassword], function(err, result) {
      if (err) return cb(err);
      cb(null, result.rows[0]);
    });
  });
};
