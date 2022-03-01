// const {registerSchema, loginSchema} = require('./auth')
const { validate } = require("./joi");
const { paymentSchemaValidation } = require("./validation");

module.exports = { paymentSchemaValidation, validate };
