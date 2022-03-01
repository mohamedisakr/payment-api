const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    creditCard: Number,
    expDate: String,
    cvv: Number,
    amount: Number,
  },
  { timestamps: true }
);

const Payment = model("payment", paymentSchema);
module.exports = Payment;
