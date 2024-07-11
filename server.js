const express = require('express');
const {PORT} = require('./server-config.js');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
