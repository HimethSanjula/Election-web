const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectionResultsSchema = new Schema({
  election_results: []
});

module.exports = mongoose.model("ElectionResults", ElectionResultsSchema);
