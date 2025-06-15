import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
   username:{
        type:String,
        unique: true,
        required: [true, "Please provide an unique username"],
    },
    email:{
        type:String,
        unique: true,
        required: [true, "Please provide an email id"]
    },
    password: {
        type:String, 
        requirer: [true, "Please enter the password"]
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.model.users || mongoose.model
("users", userSchema);

export default User;
