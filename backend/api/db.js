const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: 'postgresql://jackson:QxCiqThJWtitCtXSydc4jV9TD9WZPe6l@dpg-cq43c608fa8c73fjo9j0-a.ohio-postgres.render.com/stocks_7x0r',
  ssl: {
    rejectUnauthorized: false,
  },
});


async function getUser(id) {
    try {
        const queryText = 'SELECT * FROM users WHERE id = $1;';
        const res = await pool.query(queryText, [id]);
        if (res.rows.length > 0) {
            return res.rows[0]; // Return the user if found
        } else {
            return null; // Return null if no user is found with the given ID
        }
    } catch (err) {
        console.error('Error fetching user:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}


module.exports = { pool, getUser };