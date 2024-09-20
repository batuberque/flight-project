const BaseApiService = require("./base-api-service");
const AxiosHttpClient = require("./axios-http-client");

class FlightService extends BaseApiService {
  constructor() {
    const baseUrl =
      process.env.FLIGHT_API_URL || "https://api.schiphol.nl/public-flights";
    const defaultHeaders = {
      Accept: "application/json",
      resourceversion: "v4",
      app_id: process.env.SCHIPHOL_APP_ID,
      app_key: process.env.SCHIPHOL_APP_KEY,
    };
    const httpClient = new AxiosHttpClient(baseUrl, defaultHeaders);
    super(httpClient);
  }

  async getFlights(date, direction) {
    const params = {
      scheduleDate: date,
      flightDirection: direction,
    };

    try {
      const data = await this.get("/flights", params);
      return data.flights || data;
    } catch (error) {
      console.error("Schiphol API error:", error.message);
      throw new Error("Uçuşlar alınamadı");
    }
  }

  async getFlightById(flightId) {
    try {
      const data = await this.get(`/flights/${flightId}`);
      return data;
    } catch (error) {
      console.error("Schiphol API error:", error.message);
      throw new Error("Uçuş bilgisi alınamadı");
    }
  }
}

module.exports = new FlightService();
