const { Readable } = require('stream');
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const ConnectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
    }
    catch (err) {
        console.log(err);
    }
};

const uploadToCloudinary = async (buffer) => {
    return new Promise((resolve, reject) => {
        const writeStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );

        const readStream = Readable.from(buffer);
        readStream.pipe(writeStream);
    });
};

module.exports = { ConnectCloudinary, uploadToCloudinary };