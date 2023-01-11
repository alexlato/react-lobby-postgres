const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "alexpass",
  database: "react_lobby_database",
  host: "localhost",
  port: "5432",
});

module.exports = pool;
