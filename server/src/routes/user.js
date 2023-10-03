const express = require("express");
const {
  getMe,
  updateMe,
  getUsers,
  getAllVerifiedUsers,
  getRequests,
  getFriends,
} = require("../controllers/user");
const { verifyToken } = require("../middlewares/jwt");

const router = express.Router();

router.get("/get-me", getMe);
router.put("/update-me", updateMe);
router.get("/get-all-verified-users", getAllVerifiedUsers);
router.get("/get-users", verifyToken, getUsers);
router.get("/get-requests", getRequests);
router.get("/get-friends", getFriends);

module.exports = router;
