const mongoose = require("mongoose");
const express = require("express");
const { APP_PORT, MONGODB_URI, MONGODB_OPTIONS } = require("./config");

const createApp = require("./app");

(async () => {
  await mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);
  const app = createApp();
  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
})();
