const express = require("express");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger.json");

// Create Express App
const app = express();

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/", routes);

module.exports = app;
