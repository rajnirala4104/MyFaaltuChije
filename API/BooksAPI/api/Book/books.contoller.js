const { StatusCodes } = require("http-status-codes");
const { Books } = require("../data/dummuBookData");
const asyncHandler = require("express-async-handler");
const BookModel = require("./books.model");
const booksControllers = {
   getAllTheBooks: asyncHandler(async (req, res) => {
      const response = await BookModel.find({});
      return res.status(StatusCodes.OK).json({
         message: "Here all the Book which we have",
         data: response.data,
      });
   }),

   // inserBookInDatabase: asyncHandler(async(req, res) => {
   //    await BookModel.insertMany()
   // }),
};

module.exports = booksControllers;
