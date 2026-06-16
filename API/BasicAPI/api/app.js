require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routers/users.routes");
const { StatusCodes } = require("http-status-codes");

const app = express();
app.use(express.json());

app.get("/", (req,res) => (
   res.json({
      data:null,
      status: StatusCodes.OK,
      message: "api is running well"
   })
))

app.use("/api/user", userRouter);

module.exports = app;
