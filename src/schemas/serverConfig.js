const serverConfigSchema = {
  type: "object",
  properties: {
    PORT: { type: "number", default: 3000 },
    LOG_LEVEL: { type: "string", default: "info" }
  },
  required: [ "PORT" ],
  additionalProperties: true
}

module.exports = serverConfigSchema