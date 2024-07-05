const express = require('express');
const cors = require('cors');
const { createTables } = require('./db'); // Ensure you're importing createTables correctly

const app = express();
app.use(cors());

// Listen on the port provided by the environment or fallback to 3000
const port = process.env.PORT || 3000;

createTables().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});