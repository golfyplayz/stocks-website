const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let data = {
    "name": "Mason",
    "age": 10,
    "city": "Kansas City",
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    console.log('get main data');
    res.send(data);
});

app.get('/test', (req, res) => {
    console.log('get test data');
    res.send(data.name);
}); 