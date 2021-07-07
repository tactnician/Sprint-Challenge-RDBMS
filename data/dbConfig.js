const knex = require('knex');
require('dotenv').config();
const config = require('../knexfile.js');
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.development);

const dbEngine = process.env.DB || 'development'; 
 


module.exports =  knex(config[dbEngine]); 