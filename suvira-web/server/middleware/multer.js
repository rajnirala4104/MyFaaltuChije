const multer = require('multer');
const path = require('path');

// Configure multer with disk storage instead of memory storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './temp'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Create multer upload instance with more detailed error handling
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 2, // Limit to 2 files (authorImg and blogImg)
  },
  fileFilter: (req, file, cb) => {
    // Check file types
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: Images Only! (jpeg, jpg, png, gif)'));
  }
}).fields([
  { name: 'authorImg', maxCount: 1 },
  { name: 'blogImg', maxCount: 1 }
]);

// Wrapper middleware to handle multer errors
const uploadMiddleware = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'File too large. Maximum size is 5MB'
        });
      }
      return res.status(400).json({
        success: false,
        message: `Multer upload error: ${err.message}`
      });
    } else if (err) {
      // An unknown error occurred
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    // Check if files exist
    if (!req.files || !req.files.authorImg || !req.files.blogImg) {
      return res.status(400).json({
        success: false,
        message: 'Both author image and blog image are required'
      });
    }

    // Everything went fine
    next();
  });
};

module.exports = uploadMiddleware;