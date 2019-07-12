const uuid = require("uuid");
const logger = require("../utils/logger");
const httpLogger = require("pino-http")({
  logger,
  useLevel: logger.level,
  genReqId: () => uuid()
});

const reqLogger = (req, res, next) => {
  httpLogger(req, res);
  next();
};

module.exports = reqLogger;
