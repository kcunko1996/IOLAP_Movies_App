const knex = require('knex');

//Connecting to database
db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'mojasifra',
    database : 'movies_db'
  }
});

module.exports = db