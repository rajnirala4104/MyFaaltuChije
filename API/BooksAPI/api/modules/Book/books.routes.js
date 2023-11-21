const { Router } = require("express");
const booksControllers = require("./books.contoller");
const BookRouter = Router();

BookRouter.get("/", booksControllers.getAllTheBooks);
BookRouter.post("/", booksControllers.inserBookInDatabase);

module.exports = { BookRouter };
