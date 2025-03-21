import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bluecoast',
});

async function checkConnection() {
  try {
    // Test the connection by performing a simple query
    const [rows] = await pool.query('SELECT 1'); // Simple query to check connection
    console.log('Database connected successfully!');
    console.log('Test query result:', rows);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

// Check the connection
checkConnection();

export default pool;
