const { Router } = require("express");
const { paymentSchemaValidation, validate } = require("../validation");
const { Payment } = require("../models");
const { catchAsync } = require("../middleware");
// const { BadRequest } = require("../errors");
const router = Router();

router.post(
  "/pay",
  catchAsync(async (req, res) => {
    await validate(paymentSchemaValidation, req.body);
    const { creditCard, expirationDate, cvv, amount } = req.body;

    const paymentToAdd = await Payment.create({
      creditCard,
      expirationDate,
      cvv,
      amount,
    });

    /*
    upon successful save, should return the response of the 
    record ID and Amount in JSON format
  
    request example 
    { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
    response example 
    { "RequestId": '61b248040041bc64b411a691', Amount: 100 } (edited)
    */
    const sanitizedPayment = {
      RequestId: paymentToAdd._id,
      Amount: paymentToAdd.amount,
    };
    return res.status(201).json(sanitizedPayment);
  })
);

module.exports = { router };
