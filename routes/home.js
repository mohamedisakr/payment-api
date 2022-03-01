const { Router } = require("express");
const { catchAsync } = require("../middleware");
const router = Router();

router.get(
  "/",
  catchAsync(async (req, res) => {
    return res.status(200).json({ message: "Payment API" });
  })
);

module.exports = { router };
