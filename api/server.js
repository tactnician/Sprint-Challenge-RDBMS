const express = require('express');
require('dotenv').config();

const server = express();

const helmet = require('helmet');

const router = require('../router/router'); 

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`
        <h1>Api Portal</h1>
    `)
})

server.use('/api/projects', router);


module.exports = server; 