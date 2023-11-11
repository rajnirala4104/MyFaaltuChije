require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routers/users.routes");

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);

module.exports = app;
