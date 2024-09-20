const router = require("express").Router();
const reservationService = require("../services/reservation-service");

router.post("/", async (req, res) => {
  const { flightId } = req.body;

  if (!flightId) {
    return res.status(400).json({ message: "flightId gereklidir" });
  }

  try {
    const reservation = await reservationService.createReservation(flightId);
    res.status(201).json({ message: "Rezervasyon oluşturuldu", reservation });
  } catch (error) {
    console.error("Rezervasyon Hatası:", error.message);
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const reservations = await reservationService.getReservations();
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Rezervasyonları Getirme Hatası:", error.message);
    res.status(500).json({ message: "Rezervasyonlar getirilemedi." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await reservationService.deleteReservation(id);
    res.status(200).json({ message: "Rezervasyon başarıyla silindi." });
  } catch (error) {
    console.error("Rezervasyon Silme Hatası:", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
