import { compare, genSalt, hash } from "bcrypt";
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
      avatar: {
         type: String,
         required: true,
      },
      coverImage: {
         type: String,
         default: "",
      },
      watchHistory: [
         {
            type: Schema.Types.ObjectId,
            ref: "Video",
         },
      ],
      password: {
         type: String,
         required: [true, "Password is required"],
      },
      refreshToken: {
         type: String,
      },
   },
   { timestamps: true },
);

// for encrypting the password
userSchema.pre("save", async function (next) {
   try {
      if (this.isModified("password")) {
         const salt = await genSalt(10);
         this.password = await hash(this.password, salt);
      }
      return next();
   } catch (error) {
      return next(error);
   }
});

// method to check password
userSchema.methods.isPasswordTrue = async function (password) {
   return await compare(password, this.password); // true and false
};

// method to generate access token
userSchema.methods.generateAccessToken = function () {
   return jsonwebtoken.sign(
      {
         _id: this._id,
         email: this.email,
         userName: this.userName,
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
