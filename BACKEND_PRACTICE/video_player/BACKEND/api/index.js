import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./database/index.js";
dotenv.config({
   path: "./.env",
});

const port = process.env.PORT || 8000;
(async () => {
   try {
      await connectDB();

      app.on("error", (error) => {
         console.error(error);
         throw new Error(error);
      });

      app.listen(port, () => {
         console.log("Server is running on port: ", port);
      });
   } catch (error) {
      console.log("MONGODB connection failed: ", error);
      throw new Error(error);
   }
})();
