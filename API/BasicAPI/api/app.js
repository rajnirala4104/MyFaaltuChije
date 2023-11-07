require("dotenv").config();
const express = require("express");
const userControllers = require("./controllers/userControllers");

const app = express();

app.get("/api/users", userControllers.getAllUsers);
app.get("/api/user/:id", userControllers.getUserById);

module.exports = app;
