const express = require("express");
const router = express.Router();

const {
  getParty,getPartiesByParameters,
  createParty,
  getParties,
  updateParty,
  deleteParty,
} = require("../controllers/partyController");

router.get("/parties", getParties);
router.post("/partiesby", getPartiesByParameters);
router.get("/party/:id", getParty);
router.post("/party/create", createParty);
router.put("/party/update/:id", updateParty);
router.delete("/party/delete/:id", deleteParty);

module.exports = router;
