const pgp = require('pg-promise')();

const db = pgp({
  user: 'postgres',
  password: 'docker',
  host: 'localhost',
  port: 5432,
  schema: 'blog'
});

module.exports = db;
