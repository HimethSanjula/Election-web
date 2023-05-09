const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectionParticipantModel = new Schema({
  election_id: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  participants: {
    type: Array,
    required: true,
    length: 255,
    trim: true,
  },
});

module.exports = mongoose.model(
  "ElectionParticipant",
  ElectionParticipantModel
);
