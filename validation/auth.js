const Joi = require('joi')
const {BCRYPT_MAX_BYTES} = require('../config')

// https://stackoverflow.com/a/19605207
const email = Joi.string().email().min(8).max(254).lowercase().trim().required()
const name = Joi.string().min(3).max(128).trim().required()
const password = Joi.string()
  .min(8)
  .max(BCRYPT_MAX_BYTES, 'utf8')
  .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
  .message(
    '"{#label}" must contain at least (one upper case letter, one lower case letter, one digit)',
  )
  .required() //TODO: ma
const passwordConfirmation = Joi.valid(Joi.ref('password')).required()

const registerSchema = Joi.object({
  email,
  name,
  password,
  passwordConfirmation,
})

const loginSchema = Joi.object({
  email,
  password,
})

module.exports = {registerSchema, loginSchema}
/*

At least one lower case letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
*/
