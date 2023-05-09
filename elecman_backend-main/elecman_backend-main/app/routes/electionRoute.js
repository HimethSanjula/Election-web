const express = require("express");
const router = express.Router();

const {
  getElection,
  getElections,
  getElectionsByParameters,
  createElection,
  updateElection,
  deleteElection,
  startElection,
  stopElection,
} = require("../controllers/electionController");

router.get("/elections", getElections);
router.post("/electionsby", getElectionsByParameters);
router.get("/election/:id", getElection);
router.post("/election/create", createElection);
router.put("/election/update/:id", updateElection);
router.put("/election/start/:id", startElection);
router.put("/election/stop/:id", stopElection);
router.delete("/election/delete/:id", deleteElection);

module.exports = router;
