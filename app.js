const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, this is a CI/CD Node.js App!');
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});

