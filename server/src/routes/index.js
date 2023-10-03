const authRouter = require("./auth");
const userRouter = require("./user");

const router = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
};

module.exports = router;
