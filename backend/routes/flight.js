const { flightService } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const { date, direction } = req.query;

  if (!date || !direction) {
    return res.status(400).send("Tarih ve yön belirtilmelidir");
  }

  try {
    const flights = await flightService.getFlights(date, direction);
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const flightId = req.params.id;
  try {
    const flight = await flightService.getFlightById(flightId);
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
