const express = require('express');
const { v1Router } = require('./routes/v1Router');
const { StatusCodes } = require('http-status-codes')

const app = express();

app.get('/health', (req, res) => {
    return res.status(StatusCodes.OK).json({
        message: "api is running without any error",
        status: StatusCodes.OK,
        data: null
    })
})

app.use('/api/v1', v1Router);

module.exports = app;