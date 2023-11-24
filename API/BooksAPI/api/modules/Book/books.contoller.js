const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const BookModel = require("./books.model");
const { LOGGER } = require("../../common/logger");
const booksControllers = {
   getAllTheBooks: asyncHandler(async (req, res) => {
      try {
         const response = await BookModel.find({});
         return res.status(StatusCodes.OK).json({
            message: "Here all the Book which we have",
            data: response,
         });
      } catch (error) {
         throw new Error("Oops!! something went wrong in book api get function")
      }
   }),
   getBookDataById: asyncHandler( async (req, res) => {
      const id = req.params
      try {
         const response = await BookModel.findOne({'_id': id.id})
         return res.status(StatusCodes.OK).json({
            message: "ok",
            data: response
         })

      } catch (error) {
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Oops!! something went wrong in getBookDataById function",
            data: id
         })
      }
   }),
   inserBookInDatabase: asyncHandler(async (req, res) => {
      const { name, description, author, type, BookImage, price, discountPrice, } = req.body;
      try {
         if ( !name || !description || !author || !type || !BookImage || !price || !discountPrice ) {
            res.status(StatusCodes.BAD_REQUEST);
            throw new Error("bad data given");
         }
         if (await BookModel.findOne({ name, description, BookImage })) {
            return res.status(StatusCodes.BAD_REQUEST).json({
               message: "Data is already in our database",
               data: null
            }) 
         }
         const response = await BookModel.insertMany({ name, description, author, type, BookImage, price, discountPrice, });
         return res.status(StatusCodes.CREATED).json({
            message: "data inserted successfully",
            data: response,
         });
      } catch (error) {
         LOGGER.error(`status - ${StatusCodes.BAD_REQUEST} - Data is allready exist in our database`)
         res.status(StatusCodes.BAD_REQUEST);
         throw new Error("Data is allready exist in our database");
      }
   }),

   updateBookInDatabase: asyncHandler(async (req, res) => {
      try {
         const {id} = req.params
         const data = req.body
         const response = await BookModel.findByIdAndUpdate(id, data);
         return res.status(StatusCodes.OK).json({
            message: "data updated successfully",
            data: await BookModel.findOne({'_id': id})
         })
      } catch (error) {
         // throw new Error("Oops!! something went wrong in update book function")         
         LOGGER.error("Oops!! someting went wrong in updateBookInDatabase function")
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Oops!! something went wrong in update book function",
            data:null
         })
      }
   }),

   deleteBookDataFromTheDataBase: asyncHandler(async(req, res) => {
      try {
         const {id} = req.params
         const response = await BookModel.findByIdAndDelete(id)
         return res.status(StatusCodes.OK).json({
            message:"Data deleted successfully",
            data: response
         })
      } catch (error) {
         LOGGER.error("Oops!! somethin went wrong in delete book function")
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Oops!! somethin went wrong in delete book function",
            data: null
         })
      }

   })


};

module.exports = booksControllers;
