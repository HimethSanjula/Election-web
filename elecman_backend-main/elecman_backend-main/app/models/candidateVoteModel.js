const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateVoteSchema = new Schema({
  electionId: {
    type: String,
    required: true,
  },
  partyId: {
    type: String,
    required: true,
  },
  candidateId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("candidateVote", CandidateVoteSchema);
