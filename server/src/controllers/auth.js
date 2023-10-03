const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { registerSchema, loginSchema } = require("../utils/validate");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/jwt");

const register = asyncHandler(async (req, res) => {
  const { error } = registerSchema.validate(req.body);

  if (error) throw new Error(error.details[0].message);

  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) throw new Error("User has existed");

  const newUser = new User(req.body);

  await newUser.save();

  return res.status(200).json({
    success: true,
    message: "Register an account is successfully",
    data: newUser,
  });
});

const login = asyncHandler(async (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) throw new Error(error.details[0].message);

  const existingUser = await User.findOne({ email: req.body.email });

  if (!existingUser) throw new Error("Email adress is incorrect");

  if (!(await existingUser.isCorrectPassword(req.body.password)))
    throw new Error("Password is incorrect");

  const accessToken = generateAccessToken(existingUser._id);
  const refreshToken = generateRefreshToken(existingUser._id);

  return res.status(200).json({
    success: true,
    message: "Login successfully",
    accessToken,
    refreshToken,
    data: existingUser,
  });
});

module.exports = { register, login };
