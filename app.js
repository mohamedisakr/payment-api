const express = require("express");
const { serverError, notFound } = require("./middleware");
const { payment, home } = require("./routes");

const createApp = () => {
  const app = express();
  app.use(express.json());

  // app.use(catchAsync(active));
  app.use(home);
  app.use(payment);

  app.use(notFound);

  app.use(serverError);
  return app;
};

module.exports = createApp;
