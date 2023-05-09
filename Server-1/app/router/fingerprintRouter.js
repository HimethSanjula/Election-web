const express  =require("express");
const router = express.Router();

const {enrollUser, scanUser} = require("../controller/fingerprintController");

router.post("/enrolluser", enrollUser);
router.post("/scanuser", scanUser);

module.exports = router;