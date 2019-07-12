const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  logger.error(err)
  return res.sendStatus(500)
};

module.exports = errorHandler