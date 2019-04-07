const knex = require('knex');
require('dotenv').config();
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.development);

const dbEngine = process.env.DB || 'development'; 
const config = require('../knexfile.js')[dbEngine]; 


module.exports =  config; 