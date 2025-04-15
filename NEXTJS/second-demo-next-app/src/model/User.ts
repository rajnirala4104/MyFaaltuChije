import mongoose, {Document, Schema} from "mongoose";

interface MessageInterface extends Document {
    content: string,
    createdAt: Date,
}

const MessageSchema:Schema<MessageInterface> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        required: true,
        default: Date.now()
    }
})

interface UserInterface extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: MessageInterface[]
}

const UserSchema: Schema<UserInterface> = new Schema({
    username:{
        type:String,
        requried:[true, "Username is Required"],
        trim: true,
        unique:true,
    },
    email: {
        type:String,
        requried: [true, "Email is Required"],
        unique: true,
        match: [/.+\@.+\..+/, "Please User a Valid Email ID"]
    },
    password:{
        type:String,
        required: [true, "Password is Required"]
    },
    verifyCode:{
        type:String,
        required: [true, "Verify Code is Required"],    
    },
    verifyCodeExpiry:{
        type: Date, 
        required: [true, "Verify Code is Required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type:Boolean,
        default: true,
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.UserInterface as mongoose.Model<UserInterface>) || mongoose.model<UserInterface>("Users", UserSchema)

export default UserModel;

