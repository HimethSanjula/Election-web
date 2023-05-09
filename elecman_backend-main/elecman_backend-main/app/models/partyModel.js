const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartyModel = new Schema({
  party_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  party_description: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  party_banner: {
    type: String,
    required: true,
    trim: true,
  },
  party_icon: {
    type: String,
    required: true,
    trim: true,
  },
  party_color: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  election_id: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Party", PartyModel);
