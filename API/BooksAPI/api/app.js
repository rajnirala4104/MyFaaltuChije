const express = require("express");
const { appRouter } = require("./router");
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const {
   clientErrorHandler,
   errorHandler,
   logErrors,
} = require("./common/error.handler");
const { StatusCodes } = require("http-status-codes");
const app = express();

app.use(express.json());
const accessLogStream = fs.createWriteStream(
   path.join(__dirname, "logs", "access.log"),
   { flags: "a" }
);

app.get("/health", (req, res) => res.status(StatusCodes.OK));
app.use("/api", appRouter);
app.use(morgan("combined", { stream: accessLogStream }));


app.use(logErrors);
app.use(clientErrorHandler);
// app.use(errorHandler);
module.exports = app;
