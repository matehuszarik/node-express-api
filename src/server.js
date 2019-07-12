const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config/server')
const logger = require('./utils/logger')
const router = require('./router')
const reqLogger = require('./middlewares/reqLogger')
const errorHandler = require('./middlewares/errorHandler')
const { db: dbInstance } = require('./db')

const app = express()

app.use(reqLogger)
app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

app.use(errorHandler)

const server = app.listen(config.port, () => {
  logger.info(`Server is running on http://localhost:${config.port}`)
})

// promisfy & error handling
process.once('SIGTERM', () => {
  server.close(() => {
    logger.info('Shutdown HTTP server')
    dbInstance.destroy(() => {
      logger.info('Close DB connections')
      process.exit(0)
    })
  })
})