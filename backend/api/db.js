const { Pool } = require('pg');

const pool = new Pool({
  // Corrected property name from 'connectionsString' to 'connectionString'
  connectionString: 'postgresql://jackson:QxCiqThJWtitCtXSydc4jV9TD9WZPe6l@dpg-cq43c608fa8c73fjo9j0-a/stocks_7x0r',
});

module.exports = pool;

async function createTables() {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          email VARCHAR(150) UNIQUE NOT NULL
        )
      `);
      console.log('Table is successfully created');
    } catch (err) {
      console.error('Error creating table:', err);
    } finally {
      client.release(); // Release the client back to the pool
    }
}

module.exports.createTables = createTables;