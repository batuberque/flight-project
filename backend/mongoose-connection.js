const mongoose = require("mongoose");

const connectionUrl =
  process.env.MONGODB_CONNECTION_URL || "mongodb://mongodb:27017/";

mongoose.connect(connectionUrl);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Mongodb Connected Successfully");
});
