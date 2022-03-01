const Joi = require("joi").extend(require("@joi/date"));

const creditCard = Joi.string()
  .creditCard()
  .trim()
  .message("must be valid 16 digits credit card")
  .required();

const expDate = Joi.date()
  .format("MM/YYYY")
  //   .message("must be valid format MM/YYYY")
  .required();

const cvv = Joi.string()
  .trim()
  .pattern(new RegExp(/^[0-9]{3}$/i)) //   .regex(/^[0-9]{3}$/i)
  .max(3)
  .message("must be valid 3 digits card verification value")
  .required();

const amount = Joi.number()
  .positive()
  .message("must be valid positive number")
  .required();

exports.paymentSchemaValidation = Joi.object({
  creditCard,
  expDate,
  cvv,
  amount,
});
