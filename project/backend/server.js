require("dotenv").config();
const { createServer } = require("http");
const { app } = require("./api/app");
const PORT = process.env.PORT || 8000;

createServer(app).listen(PORT, () => {
   console.log(`server is running.. http://127.0.0.1:${PORT}`.yellow.bold);
});
