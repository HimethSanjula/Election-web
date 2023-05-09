const express = require("express");
const router = express.Router();

const {
  partyVoteadd,
  candidateVoteAdd,
  partyVoteResults,
  candidateVoteResults,
  partyVoteResultsByCount,
  candidateVoteResultsByCount,
} = require("../controllers/voteController");

router.post("/partyvote", partyVoteadd);
router.post("/candidatevote", candidateVoteAdd);
router.post("/partyvoteresults", partyVoteResults);
router.post("/partyvoteresultsbycount", partyVoteResultsByCount);
router.post("/candidatevoteresults", candidateVoteResults);
router.post("/candidatevoteresultsbycount", candidateVoteResultsByCount);

module.exports = router;
