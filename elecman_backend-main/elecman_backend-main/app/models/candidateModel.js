const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateModel = new Schema({
  candidate_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  candidate_description: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  candidate_image: {
    type: String,
    required: true,
    trim: true,
  },
  candidate_number: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  party_id: {
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

module.exports = mongoose.model("Candidate", CandidateModel);
