import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

export const connectDB = async () => {
   try {
      const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`);
      console.log(`MongoDB connected: ${connection.connection.host} - ${DATABASE_NAME}`);
   } catch (error) {
      console.log("MONGODB connection error: ", error);
      process.exit(1) // By calling this function Node.js will force the current process that’s running to exit as soon as possible.
   }
}