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
        <h3>Endpoints:</h3>
        <p></p>
        <p>~/api/projects</p>
        <p></p>
        <h3>Methods</h3>
        <p>GET projects</p>
        <p>GET projects by id</p>
        <p>POST projects</p>
        <p>GET action items by id</p>
        <p>POST action</p>
    `)
})

server.use('/api/projects', router);


module.exports = server; 