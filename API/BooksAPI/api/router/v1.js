const { Router } = require("express");
const { BookRouter } = require("../modules/Book/books.routes");

const v1Router = Router();
v1Router.use("/books", BookRouter);

module.exports = {v1Router}