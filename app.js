const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { serverError, notFound } = require("./middleware");
const { payment, home } = require("./routes");

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(morgan("combined"));

  app.use(home);
  app.use(payment);

  app.use(notFound);
  app.use(serverError);
  return app;
};

module.exports = createApp;
