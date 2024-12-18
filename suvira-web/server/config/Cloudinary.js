const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

export const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
        if (!filePath) return null;

        // upload on cloudinary
        const response = await cloudinary.uploader.upload(filePath);

        fs.unlinkSync(filePath);
        return response.url;
    } catch (error) {
        // remove the locally saved temporary file
        fs.unlinkSync(filePath);

        return null;
    }
};