const ajv = require('ajv')
const validator = new ajv({
  coerceTypes: true,
  useDefaults: true
})

// TODO https://github.com/epoberezkin/ajv-errors or alternatives
const toMessage = (validationResult) => {
  if (validationResult && validationResult.length && validationResult[0].params) {
    return validationResult[0].params
  }

  return 'Bad request'
}

module.exports = {
  validator,
  toMessage
}
