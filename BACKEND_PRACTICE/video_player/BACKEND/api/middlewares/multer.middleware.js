import fs from "fs";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./public/temp");
   },
   filename: function (req, file, cb) {
      const filePath = path.join(
         "./public/temp",
         file.fieldname + file.originalname,
      );
      if (fs.existsSync(filePath)) {
         // Handle the case where the file already exists
         fs.unlinkSync(filePath);
         cb(null, file.fieldname + file.originalname);
      } else {
         cb(null, file.fieldname + file.originalname);
      }
   },
});

export const upload = multer({ storage });
