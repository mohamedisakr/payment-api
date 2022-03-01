const {registerSchema, loginSchema} = require('./auth')
const {validate} = require('./joi')

module.exports = {registerSchema, loginSchema, validate}
