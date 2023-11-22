const { Router } = require("express");
const booksControllers = require("./books.contoller");
const BookRouter = Router();

BookRouter.get("/", booksControllers.getAllTheBooks);
BookRouter.get("/:id", booksControllers.getBookDataById);
BookRouter.post("/", booksControllers.inserBookInDatabase);
BookRouter.put('/:id', booksControllers.updateBookInDatabase)
BookRouter.delete('/:id', booksControllers.deleteBookDataFromTheDataBase)


module.exports = { BookRouter };
