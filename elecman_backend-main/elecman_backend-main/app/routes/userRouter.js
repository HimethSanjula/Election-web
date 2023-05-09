const express = require("express");
const router = express.Router();

const {
  getUser,
  getUsers,getUsersByParameter,
  createUser,
  updateUser,
  activateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/users", getUsers);
router.post("/usersby", getUsersByParameter);
router.post("/user/login", getUsersByParameter);
router.get("/user/:id", getUser);
router.post("/user/create", createUser);
router.put("/user/update/:id", updateUser);
router.put("/user/activate/:id", activateUser);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
