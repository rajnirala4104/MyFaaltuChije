const express = require("express");
const { BookRouter } = require("./Book/books.routes");
const app = express();

app.use(express.json());
app.use("/api/books", BookRouter);
module.exports = app;
