const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  Company: { type: String, required: true },
  Name: { type: String },
  Room: { type: [String], required: true },
  Date: { type: String, required: true },
  Time: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
