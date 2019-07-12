const { validator } = require('../utils/validator')
const schema = require('../schemas/serverConfigSchema')

// validation assigns default values on process.env - not safe?
if (!validator.validate(schema, process.env)) {
  console.error("Invalid configuration values", validator.errors)
  process.exit(0)
}

const serverConfig = {
  port: process.env.PORT,
  logLevel: process.env.LOG_LEVEL,
}

module.exports = serverConfig
