const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const pool = new Pool({
    connectionString: 'postgresql://admin:8DsKX3emwJrLwfZjeLG6eISFJqku4K3n@dpg-cs27c0u8ii6s739d1ltg-a.ohio-postgres.render.com/stocksdatabase',
    ssl: {
        rejectUnauthorized: false,
    },
});

app.listen(8383, () => {
    console.log('Server is running on port 8383');
});

app.delete('/purge', async (req, res) => {
    let dateNow = Date.now();
    let purgeDate = dateNow - 2629743;
    try {
        const queryText = 'DELETE FROM calculations WHERE date < $1';
        await pool.query(queryText, [purgeDate]);
        res.status(200).json({ message: 'Old data purged' });
        console.log('Old data purged');
    } catch (err) {
        console.error('Error purging old data:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/purge/all', async (req, res) => {
    let dateNow = Date.now();
    let purgeDate = dateNow;
    try {
        const queryText = 'DELETE FROM calculations WHERE date < $1';
        await pool.query(queryText, [purgeDate]);
        res.status(200).json({ message: 'Old data purged' });
        console.log('All data purged');
    } catch (err) {
        console.error('Error purging old data:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.post('/data', async (req, res) => {
    const { init, fin, amnt, name, total } = req.body;
    console.log('Received data:', { init, fin, amnt, name, total });
    let date = Date.now();

    try {
        const queryText = 'INSERT INTO calculations (initial_value, final_value, number_stocks, name, calculation, date) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(queryText, [init, fin, amnt, name, total, date]);
        res.status(201).json({ message: 'Data received and inserted into the database' });
        console.log('Data inserted into the database');
    } catch (err) {
        console.error('Error inserting data into the database:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});