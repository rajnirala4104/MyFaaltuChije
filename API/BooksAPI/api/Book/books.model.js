const { model, Schema } = require("mongoose");

const BooksSchema = Schema({
   name: {
      type: String,
      required: true,
      lowercase: true,
   },
   description: {
      type: String,
      required: [true, "you have to tell us about the book"],
      lowercase: true,
   },
   author: {
      type: String,
      required: true,
   },
   BookImage: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   discountPrice: {
      type: Number,
      require: false,
   },
});

const BookModel = model("Books", BooksSchema);
module.exports = BookModel;
