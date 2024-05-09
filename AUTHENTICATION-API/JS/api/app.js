const express = require('express');
const { v1Router } = require('./routes/v1Router');
const { StatusCodes } = require('http-status-codes')
const cors = require('cors');
const connectDatabase = require('./configs/databaseConnection');

const app = express();
connectDatabase()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1', v1Router);

module.exports = app;