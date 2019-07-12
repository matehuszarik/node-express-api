const { validator } = require('../utils/validator')
const schema = require('../schemas/dbConfigSchema')

// validation assigns default values on process.env - not safe?
if (!validator.validate(schema, process.env)) {
  console.error("Invalid configuration values", validator.errors)
  process.exit(0)
}

const dbConfig = {
  pgHost: process.env.PG_HOST,
  pgUser: process.env.PG_USER,
  pgPassword: process.env.PG_PASSWORD,
  pgDatabase: process.env.PG_DATABASE
}

module.exports = dbConfig
