const {BadRequest} = require('../errors')

const validate = async (schema, payload) => {
  try {
    await schema.validateAsync(payload, {abortEarly: false})
  } catch (err) {
    // throw new BadRequest(err)
    throw new BadRequest(err)
  }
}

module.exports = {validate}
