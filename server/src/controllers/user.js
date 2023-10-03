const User = require("../models/user");
const FriendRequest = require("../models/friendRequest");
const asyncHandler = require("express-async-handler");

const getMe = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Get me success",
    data: req.user,
  });
});

const updateMe = asyncHandler(async (req, res) => {
  const { firstName, lastName, avatar, about } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        firstName,
        lastName,
        avatar,
        about,
      },
    },
    { $new: true }
  );

  res.status(200).json({
    success: true,
    message: "User Updated successfully",
    data: user,
  });
});

const getUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({}).select("firstName lastName _id");

  const remainingUsers = allUsers.filter(
    (user) =>
      !req.user.friends.includes(user._id) &&
      user._id.toString() !== req.user._id.toString()
  );

  res.status(200).json({
    success: true,
    message: "Users found successfully!",
    data: remainingUsers,
  });
});

const getAllVerifiedUsers = asyncHandler(async (req, res) => {});

const getRequests = asyncHandler(async (req, res) => {
  const requests = await FriendRequest.find({
    recipient: req.user._id,
  })
    .populate("sender")
    .select("firstName lastName _id");

  if (!requests) throw new Error("Requests are not found");

  return res.status(200).json({
    success: true,
    message: "Friends found successfully!",
    data: requests,
  });
});

const getFriends = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user._id).populate(
    "friends",
    "_id firstName lastName"
  );

  if (!currentUser) throw new Error("Current user is not found");

  return res.status(200).json({
    success: true,
    message: "Requests found successfully!",
    data: requests,
  });
});

module.exports = {
  getMe,
  updateMe,
  getUsers,
  getAllVerifiedUsers,
  getRequests,
  getFriends,
};
