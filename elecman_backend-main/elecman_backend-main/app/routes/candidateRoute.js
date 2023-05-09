const express = require("express");
const router = express.Router();

const {
  getCandidate,
  getCandidates,getCandidatesByParameters,
  createCandidate,
  updatecandidate,
  deleteCandidate,
} = require("../controllers/candidateController");

router.get("/candidates", getCandidates);
router.post("/candidatesby", getCandidatesByParameters);
router.get("/candidate/:id", getCandidate);
router.post("/candidate/create", createCandidate);
router.put("/candidate/update/:id", updatecandidate);
router.delete("/candidate/delete/:id", deleteCandidate);

module.exports = router;
