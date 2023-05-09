const express = require("express");
const router = express.Router();

const {
  getAdmin,
  getAdmins,
  getAdminsByParameters,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

router.get("/admins", getAdmins);
router.post("/adminsby", getAdminsByParameters);
router.post("/admin/login", getAdminsByParameters);
router.get("/admin/:id", getAdmin);
router.post("/admin/create", createAdmin);
router.put("/admin/update/:id", updateAdmin);
router.delete("/admin/delete/:id", deleteAdmin);

module.exports = router;
