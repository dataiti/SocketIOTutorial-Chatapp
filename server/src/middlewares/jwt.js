const JWT = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const { promisify } = require("util");

const generateAccessToken = (_id, permissions) => {
  return JWT.sign({ _id, permissions }, process.env.JWT_SECRET_ACCESS_KEY, {
    expiresIn: "1d",
  });
};

const generateRefreshToken = (_id, permissions) => {
  return JWT.sign({ _id, permissions }, process.env.JWT_SECRET_REFRESH_KEY, {
    expiresIn: "30d",
  });
};

const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw new Error("You are not logged in! Please log in to get access");
  }

  const decoded = await promisify(JWT.verify)(
    token,
    process.env.JWT_SECRET_ACCESS_KEY
  );

  const user = await User.findById(decoded._id);

  if (!user)
    throw new Error("The user belonging to this token does no longer exists");

  req.user = user;
  next();
});

module.exports = { generateAccessToken, generateRefreshToken, verifyToken };
