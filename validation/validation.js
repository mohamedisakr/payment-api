const { celebrate, SchemaOptions, Modes, Segments } = require("celebrate"); //, Joi
const Joi = require("joi").extend(require("@joi/date"));

export const validate = (schema) =>
  celebrate(
    schema,
    {
      abortEarly: false, // validate all fields in the segment
    },
    {
      mode: Modes.FULL, // validate all segments (body, query, etc.)
    }
  );

const creditCard = Joi.string().creditCard().required();
const expirationDate = Joi.date().format("MM/YYYY").required();
const cvv = Joi.string()
  .trim()
  .regex(/^[0-9]{3}$/i)
  .max(3)
  .required();
const amount = Joi.number().positive().required();

exports.paymentSchemaValidation = {
  [Segments.BODY]: Joi.object().keys({
    creditCard,
    expirationDate,
    cvv,
    amount,
  }),
};
