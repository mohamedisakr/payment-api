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

    const paymentToAdd = await Payment.create({
      creditCard,
      expDate,
      cvv,
      amount,
    });

    const payment = {
      RequestId: paymentToAdd._id,
      Amount: paymentToAdd.amount,
    };
    return res.status(201).json(payment);
  })
);

module.exports = { router };
