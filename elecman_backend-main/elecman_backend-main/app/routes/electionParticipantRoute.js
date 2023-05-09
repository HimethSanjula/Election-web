const express = require("express");
const router = express.Router();

const {
  getElectionParticipants,
  createElectionParticipant,
  updateElectionParticipants,
} = require("../controllers/electionParticipantController");

router.get("/electionparticipant/:id", getElectionParticipants);
router.post("/electionparticipant/create", createElectionParticipant);
router.put("/electionparticipant/update/:id", updateElectionParticipants);

module.exports = router;
