const BaseService = require("./base-service");
const Reservation = require("../models/reservation");
const flightService = require("./flight-service");

class ReservationService extends BaseService {
  constructor() {
    super(Reservation);
    this.flightService = flightService; // Dependency Injection
  }

  async createReservation(flightId) {
    const flightData = await flightService.getFlightById(flightId);

    if (!flightData) {
      throw new Error("Uçuş bulunamadı");
    }

    const flightDateTime = new Date(flightData.scheduleDateTime);
    if (flightDateTime < new Date()) {
      throw new Error("Geçmiş tarihli uçuşlara rezervasyon yapılamaz");
    }

    const existingReservation = await this.find({ flightId });
    if (existingReservation.length > 0) {
      throw new Error("Bu uçuş için zaten bir rezervasyon yapılmış");
    }

    const reservation = await this.create({ flightId });

    return reservation;
  }

  async getReservations() {
    return this.find({});
  }

  async deleteReservation(id) {
    const reservation = await this.findById(id);
    if (!reservation) {
      throw new Error("Rezervasyon bulunamadı");
    }

    return this.deleteById(id);
  }
}

module.exports = new ReservationService();
