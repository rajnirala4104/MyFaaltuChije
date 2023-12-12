const express = require("express");
const { userController } = require("./controllers/userControllers");
const connectDatabase = require("./config/database");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) =>
  res
    .status(StatusCodes.OK)
    .json({ message: "API is running successfully", status: StatusCodes.OK })
);
app.get("/api", userController.getAllUsers);
app.post("/api/user/update/:id", userController.updateUserInfo);
app.post("/api/user", userController.insertAndUser);
app.delete("/api/user/:id", userController.deleteUser);
// app.get("/api?search", userController.getUserBySearch);

module.exports = { app };
