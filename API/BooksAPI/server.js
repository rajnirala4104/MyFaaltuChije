require("dotenv").config();
const { createServer } = require("http");
const app = require("./api/app");
const { PORT } = process.env || 8080;
const server = createServer(app).listen(PORT, () => {
   console.log(
      `Server has connected on ${PORT} - http://127.0.0.1:8080/api/books`
   );
});
