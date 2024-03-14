const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    console.log('Hello World but theres a test in the url');
    res.send('Hello World but theres a test in the url');
});