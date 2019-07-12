const dbConfigSchema = {
  type: "object",
  properties: {
    PG_HOST: { type: "string" },
    PG_USER: { type: "string" },
    PG_PASSWORD: { type: "string" },
    PG_DATABASE: { type: "string", default: "users" }
  },
  required: [ "PG_HOST", "PG_USER", "PG_PASSWORD" ],
  additionalProperties: true
}

module.exports = dbConfigSchema