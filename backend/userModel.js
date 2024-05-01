// Import the database connection
const db = require('./db');

// Function to fetch all users from the database
async function getAllUsers() {
  try {
    // Execute the SELECT query
    const [rows, fields] = await db.promise().query('SELECT * FROM users');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

module.exports = {
  getAllUsers
};
