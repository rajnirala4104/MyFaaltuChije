const express = require("express");
const { BookRouter } = require("./modules/Book/books.routes");
const { appRouter } = require("./router");
const app = express();

app.use(express.json());
app.use("/api", appRouter);
module.exports = app;
