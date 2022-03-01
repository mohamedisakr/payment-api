const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    creditCard: Number,
    expirationDate: Date,
    cvv: Number,
    amount: Number,
  },
  { timestamps: true }
);

const Payment = model("payment", paymentSchema);
module.exports = Payment;
