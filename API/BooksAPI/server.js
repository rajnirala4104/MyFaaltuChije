require("dotenv").config();
const { createServer } = require("http");
const app = require("./api/app");
const connectDatabase = require("./api/database/connectDB");
const { LOGGER } = require("./api/common/logger");
const { PORT } = process.env || 8080;
connectDatabase();

const server = createServer(app).listen(PORT, () => {
   LOGGER.info(`Server has connected on ${PORT} - http://127.0.0.1:8080/api/v1/books`)
   console.info(
      `Server has connected on ${PORT} - http://127.0.0.1:8080/api/v1/books`.yellow.bold
   );
});
