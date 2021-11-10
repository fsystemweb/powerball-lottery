const express = require("express");
const timeout = require("connect-timeout");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger.json");

const routes = require("./routes");
const { TIME_OUT } = require("./constants/constants");

// Create Express App
const app = express();

app.use(express.json());

app.use(timeout(TIME_OUT));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/", routes);

module.exports = app;
