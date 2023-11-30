const express = require("express");
const { userController } = require("./controllers/userControllers");
const connectDatabase = require("./config/database");
const cors = require("cors");
const app = express();
connectDatabase();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.status(StatusCodes.OK));
app.get("/api", userController.getAllUsers);
app.post("/api/user", userController.insertAndUser);

module.exports = { app };
