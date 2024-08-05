import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (filePath) => {
   console.log(
      process.env.CLOUDINARY_API_KEY,
      process.env.CLOUDINARY_NAME,
      process.env.CLOUDINARY_API_SECRET,
   );

   try {
      console.log(filePath);

      console.log("entered in uploadOnCloudinary");

      if (!filePath) return null;

      console.log("before uploading..");
      // -------- BUG ---------
      // upload on cloudinary
      const response = await cloudinary.uploader.upload(filePath);
      // -----------------------
      console.log("after uploading..");

      console.log("file has been uploader: ", response.url);

      fs.unlinkSync(filePath);
      return response;
   } catch (error) {
      // remove the locally saved temporary file
      fs.unlinkSync(filePath);

      return null;
   }
};
