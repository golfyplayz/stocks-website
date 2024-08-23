const express = require('express');
const cors = require('cors');
const { getUser } = require('./db'); // Ensure you're importing createTables correctly

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Listen on the port provided by the environment or fallback to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Route to handle GET request for user by ID
app.get('/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const user = await getUser(userId);
        if (user) {
            res.status(200).json(user); // Send the user object as JSON
        } else {
            res.status(404).json({ message: 'User not found' }); // Send a 404 if user not found
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' }); // Send a 500 if there's a server error
    }
});