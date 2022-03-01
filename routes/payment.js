const { Router } = require("express");
const { paymentSchemaValidation, validate } = require("../validation");
const { Payment } = require("../models");
const { catchAsync } = require("../middleware");
const router = Router();

router.post(
  "/pay",
  catchAsync(async (req, res) => {
    await validate(paymentSchemaValidation, req.body);
    const { creditCard, expDate, cvv, amount } = req.body;
    try {
      const paymentToAdd = await Payment.create({
        creditCard,
        expDate,
        cvv,
        amount,
      });

      const sanitizedPayment = {
        RequestId: paymentToAdd._id,
        Amount: paymentToAdd.amount,
      };

      return res.status(201).json(sanitizedPayment);
    } catch (err) {
      console.error(`Payment creation failed ${JSON.stringify(err, null, 4)}`);
      return res.status(400).json({ message: `Payment creation failed` });
    }
  })
);

module.exports = { router };
