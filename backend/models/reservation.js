const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  flightId: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
