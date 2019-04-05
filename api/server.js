const express = require('express');
const server = express(); 


server.use(express.json);


//sanity check 
server.get('/', (req, res) => {
    res.send(`
        <h1>API</h1>
    `)
})

module.exports = server;
