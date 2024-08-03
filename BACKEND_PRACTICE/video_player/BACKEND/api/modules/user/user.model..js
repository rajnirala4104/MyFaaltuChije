import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
   {
      fullName: {
         type: String,
         required: true,
         lowercase: true,
         index: true,
      },
      userName: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         index: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      profilePic: {
         type: String,
         requied: true,
      },
      coverImage: {
         type: String,
      },
      watchHistory: [
         {
            type: Schema.Types.ObjectId,
            ref: "Video",
         },
      ],
      password: {
         type: String,
         requied: [true, "Password is required"],
      },
      refreshToken: {
         type: string,
      },
   },
   { timestamps: true },
);

// for encrypting the password
userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) return next();

   const salt = 45;
   this.password = bcrypt.hash(this.password, salt);
   next();
});

// method to check password
userSchema.methods.isPasswordTrue = async function (password) {
   // true and false
   return await bcrypt.compare(password, this.password);
};

// method to generate access token
userSchema.methods.generateAccessToken = function () {
   return jsonwebtoken.sign(
      {
         _id: this._id,
         email: this.email,
         userName: this.userName,
         fullName: this.fullName,
      },
      process.env.ACCESS_JWT_SECRET,
      { expiresIn: process.env.ACCESS_JWT_EXPIRY },
   );
};

// method to generate refresh token
userSchema.methods.generateRefreshToken = function () {
   return jsonwebtoken.sign(
      { _id: this._id },
      process.env.REFRESH_TOKEN_SECRETE,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
   );
};

const User = model("User", userSchema);
export { User };
