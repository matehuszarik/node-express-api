const knex = require('knex')
const config = require('./config/db')

const dbConfig = {
  client: 'postgresql',
  connection: {
    host: config.pgHost,
    user: config.pgUser,
    password: config.pgPassword,
    database: config.pgDatabase
  },
  // TODO
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
} 

const db = knex(dbConfig)

module.exports = {
  db,
  dbConfig
}