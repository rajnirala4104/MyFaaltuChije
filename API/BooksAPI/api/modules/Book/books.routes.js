const { Router } = require("express");
const booksControllers = require("./books.contoller");
const BookRouter = Router();

BookRouter.get("/", booksControllers.getAllTheBooks);
BookRouter.post("/", booksControllers.inserBookInDatabase);
BookRouter.put('/:id', booksControllers.updateBookInDatabase)
BookRouter.delete('/:id', booksControllers.deleteBookDataFromTheDataBase)


module.exports = { BookRouter };
