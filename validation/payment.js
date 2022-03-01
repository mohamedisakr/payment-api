const Joi = require("joi").extend(require("@joi/date"));

const creditCard = Joi.string().creditCard().trim().required();
const expDate = Joi.date().format("MM/YYYY").required();
const cvv = Joi.string()
  .trim()
  .regex(/^[0-9]{3}$/i)
  .max(3)
  .required();
const amount = Joi.number().positive().required();

exports.paymentSchemaValidation = Joi.object({
  creditCard,
  expDate,
  cvv,
  amount,
});
