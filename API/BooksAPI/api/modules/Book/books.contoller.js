const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const BookModel = require("./books.model");
const { LOGGER } = require("../../common/logger");
const { Books } = require("../../data/dummyBookData");

// Object of controllers
const booksControllers = {

   // getting all the books
   getAllTheBooks: asyncHandler(async (req, res) => {
      try {
         // mongoose quary ".find()"
         const response = await BookModel.find({});
         // if the database is empty or null then insert a dummyBookData
         if (!response) {
            // using .insertMany() mongoose query 
            const { data } = await BookModel.insertMany(Books)
            return res.status(StatusCodes.CREATED).json({
               message: "inserted all the Books",
               data: data
            })
         }
         return res.status(StatusCodes.OK).json({
            message: "Here all the Book which we have",
            data: response,
         });
      } catch (error) {
         throw new Error("Oops!! something went wrong in book api get function")
      }
   }),

   // getting single book by its id
   getBookDataById: asyncHandler(async (req, res, next) => {
      // getting the params which is given by client
      const { id } = req.params
      try {
         // mongoose quary ".findOne()"
         const response = await BookModel.findOne({ '_id': id })
         return res.status(StatusCodes.OK).json({
            message: "ok",
            data: response
         })

      } catch (error) {
         next(error)
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Oops!!",
            data: id
         })
      }
   }),

   // inserting a book
   inserBookInDatabase: asyncHandler(async (req, res) => {
      //getting the client's data from "req.body"
      const { name, description, author, type, BookImage, price, discountPrice, } = req.body;
      try {
         // checking if even one of them is missing, show error
         if (!name || !description || !author || !type || !BookImage || !price || !discountPrice) {
            res.status(StatusCodes.BAD_REQUEST);
            throw new Error("bad data given");
         }
         // checking if the data is already in the database, show message, using mongoose quary ".findOne()"
         if (await BookModel.findOne({ name, description, BookImage })) {
            return res.status(StatusCodes.BAD_REQUEST).json({
               message: "Data is already in our database",
               data: null
            })
         }
         // mongoose quary ".insertMany()"
         const response = await BookModel.insertMany({ name, description, author, type, BookImage, price, discountPrice, });
         return res.status(StatusCodes.CREATED).json({
            message: "data inserted successfully",
            data: response,
         });
      } catch (error) {
         // if something wrong with the logic run this block
         // ------ ERROR -------
         LOGGER.error(`status - ${StatusCodes.INTERNAL_SERVER_ERROR} - Data is allready exist in our database`)
         res.status(StatusCodes.INTERNAL_SERVER_ERROR);
         throw new Error("Data is allready exist in our database");
      }
   }),

   // update book function
   updateBookInDatabase: asyncHandler(async (req, res) => {
      try {
         const { id } = req.params
         const data = req.body
         // mongoose quary ".findByIdAndUpdate()"
         const response = await BookModel.findByIdAndUpdate(id, data);
         return res.status(StatusCodes.OK).json({
            message: "data updated successfully",
            data: await BookModel.findOne({ '_id': id })
         })
      } catch (error) {
         // throw new Error("Oops!! something went wrong in update book function")         
         LOGGER.error("Oops!! someting went wrong in updateBookInDatabase function")
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Oops!! something went wrong in update book function",
            data: null
         })
      }
   }),

   // delet function
   deleteBookDataFromTheDataBase: asyncHandler(async (req, res) => {
      try {
         const { id } = req.params
         // mongoose quary ".findByIdAndDelete()"
         const response = await BookModel.findByIdAndDelete(id)
         return res.status(StatusCodes.OK).json({
            message: "Data deleted successfully",
            data: response
         })
      } catch (error) {
         LOGGER.error("Oops!! somethin went wrong in delete book function")
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Oops!! somethin went wrong in delete book function",
            data: null
         })
      }
   })
};

module.exports = booksControllers;
