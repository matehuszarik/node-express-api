const { dbConfig } = require('./src/db')

console.info(`Running migrations on ${process.env.NODE_ENV}`)

module.exports = {
  development: {
    ...dbConfig
  },
  staging: {
    ...dbConfig
  },
  production: {
    ...dbConfig
  }
};
