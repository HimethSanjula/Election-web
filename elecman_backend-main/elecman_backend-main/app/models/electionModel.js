const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectionSchema = new Schema({
  election_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  start_time: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  end_time: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  image_name: {
    type: String,
    required: true,
    trim: true,
  },
  is_started: {
    type: Boolean,
    default: false,
  },
  candidate_votable: {
    type: Boolean,
    default: false,
  },
  is_ended: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Election", ElectionSchema);
