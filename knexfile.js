
require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.sqlite'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

  production : {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    
    seeds: {
      directory: './data/seeds',
    },
  },
};

