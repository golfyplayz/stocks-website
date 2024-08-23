const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
    connectionString: 'postgresql://admin:VH9bKep2ukNS2v4NumzNDiCx85AhMLta@dpg-cr4f26tsvqrc73avj100-a.ohio-postgres.render.com/stocks_kvmk',
    ssl: {
        rejectUnauthorized: false,
    },
});

async function getUser(id) {
    try {
        const queryText = 'SELECT * FROM userinfo WHERE userid = $1;';
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