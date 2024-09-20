function errorHandler(err, req, res, next) {
  console.error("Hata:", err.message);
  res.status(500).json({ message: "Sunucu hatası" });
}

module.exports = errorHandler;
