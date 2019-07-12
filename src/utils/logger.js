const pino = require('pino')
const config = require('../config/server')

const logger = pino({
  level: config.logLevel
})

// TODO

module.exports = logger