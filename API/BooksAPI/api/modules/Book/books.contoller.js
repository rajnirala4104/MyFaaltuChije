const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const BookModel = require("./books.model");
const booksControllers = {
   getAllTheBooks: asyncHandler(async (req, res) => {
      const response = await BookModel.find({});
      return res.status(StatusCodes.OK).json({
         message: "Here all the Book which we have",
         data: response,
      });
   }),

   inserBookInDatabase: asyncHandler(async (req, res) => {
      const { name, description, author, type, BookImage, price, discountPrice, } = req.body;
      if ( !name || !description || !author || !type || !BookImage || !price || !discountPrice ) {
         res.status(StatusCodes.BAD_REQUEST);
         throw new Error("bad data given");
      }

      if (!(await BookModel.findOne({ name, description, BookImage }))) {
         const response = await BookModel.insertMany({ name, description, author, type, BookImage, price, discountPrice, });
         console.log("data inserted successfully -- ", response);
         return res.status(StatusCodes.CREATED).json({
            message: "data inserted successfully",
            data: response,
         });
      } else {
         res.status(StatusCodes.BAD_REQUEST);
         throw new Error("Data is allready exist in our database");
      }
   }),

   updateBookInDatabase: asyncHandler(async(req, res) => {
      const id = req.params
   }),

   deleteBookDataFromTheDataBase: asyncHandler(async(req, res) => {
      const id = req.params
   })


};

module.exports = booksControllers;
