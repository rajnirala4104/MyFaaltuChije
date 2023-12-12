const { Schema, model } = require("mongoose");

// const genderEnum = Object.freeze({ male: 1, femail: 0, other: -1 });

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Enter a valid email address",
      // ],
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
      length: 9,
      // match: [
      //   /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      //   "Enter a valid phone number",
      // ],
    },
    gender: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
