const { StatusCodes } = require("http-status-codes");
const { books } = require("../data/dummuBookData");
const booksControllers = {
   getAllTheBooks: (req, res) => {
      return res.status(StatusCodes.OK).json({
         message: "Here all the Book which we have",
         data: books,
      });
   },
};

module.exports = booksControllers;
