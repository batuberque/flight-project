// App.js
const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./mongoose-connection");

// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error-handler");

// Routes
const flightRouter = require("./routes/flight");
const reservationRouter = require("./routes/reservation");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.use("/flights", flightRouter);
app.use("/reservations", reservationRouter);

app.use(errorHandler);

module.exports = app;
