// db.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '7011783191MYsql@ankit',
  database: 'ankit'
});

// Export the connection pool
module.exports = pool;
