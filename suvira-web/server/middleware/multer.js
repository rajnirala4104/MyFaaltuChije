const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./temp");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname.trim()}`);
    // return cb(null, file.originalname);
  },
});

export const upload = multer({ storage });