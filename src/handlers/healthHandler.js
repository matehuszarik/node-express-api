const { db } = require('../db')

const healthCheck = async (req, res, next) => {
  try {
    await db.raw('SELECT now()')

    res.send({ status: "OK" })
  } catch(err) {
    next(err)
  }
}

module.exports = {
  healthCheck
}