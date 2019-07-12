const { Router } = require('express')
const { healthCheck } = require('./handlers/healthHandler')

const router = new Router()

router.get('/health', healthCheck)

module.exports = router