// const {registerSchema, loginSchema} = require('./auth')
const { validate } = require("./joi");
const { paymentSchemaValidation } = require("./payment");

module.exports = { paymentSchemaValidation, validate };
