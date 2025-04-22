// Import mongoose and necessary types from mongoose
import mongoose, {Document, Schema} from "mongoose";

// Define an interface for Message that extends Document
// This creates a TypeScript type for message documents
interface MessageInterface extends Document {
    content: string,     // Message content as string
    createdAt: Date,     // Date when message was created
}

// Create a Schema for Message using the interface
const MessageSchema:Schema<MessageInterface> = new Schema({
    content: {
        type: String,        // Data type for content field
        required: true,      // Make content a required field
    },
    createdAt: {
        type: Date,          // Data type for createdAt field
        required: true,      // Make createdAt a required field
        default: Date.now()  // Default value is current timestamp
    }
})

// Define User interface extending Document
// This creates a TypeScript type for user documents
interface UserInterface extends Document{
    username: string,            // User's username
    email: string,               // User's email
    password: string,            // User's password
    verifyCode: string,          // Code for account verification
    verifyCodeExpiry: Date,      // Expiration date of verification code
    isVerified: boolean,         // User verification status
    isAcceptingMessage: boolean, // Whether user accepts messages
    messages: MessageInterface[] // Array of messages for this user
}

// Create a Schema for User using the interface
const UserSchema: Schema<UserInterface> = new Schema({
    username:{
        type: String,            // Data type for username
        requried: [true, "Username is Required"],  // Required with error message
        trim: true,              // Remove whitespace from start/end
        unique: true,            // Username must be unique in database
    },
    email: {
        type: String,            // Data type for email
        requried: [true, "Email is Required"],     // Required with error message
        unique: true,            // Email must be unique in database
        match: [/.+\@.+\..+/, "Please User a Valid Email ID"]  // Regex validation for email format
    },
    password:{
        type: String,            // Data type for password
        required: [true, "Password is Required"]   // Required with error message
    },
    verifyCode:{
        type: String,            // Data type for verification code
        required: [true, "Verify Code is Required"],  // Required with error message
    },
    verifyCodeExpiry:{
        type: Date,              // Data type for code expiry date
        required: [true, "Verify Code is Required"],  // Required with error message
    },
    isVerified: {
        type: Boolean,           // Data type for verification status
        default: false,          // Default value is false (not verified)
    },
    isAcceptingMessage: {
        type: Boolean,           // Data type for message acceptance status
        default: true,           // Default value is true (accepts messages)
    },
    messages: [MessageSchema]    // Embed array of messages using MessageSchema
})

// Create and export the User model
// Checks if model already exists to prevent recompilation errors
// If it doesn't exist, creates a new model named "Users" with UserSchema
const UserModel = (mongoose.models.UserInterface as mongoose.Model<UserInterface>) || 
                  mongoose.model<UserInterface>("Users", UserSchema)
export default UserModel;
