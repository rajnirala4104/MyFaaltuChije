const { Router } = require('express');
const { userRouter } = require('../modules/user/user.routes');
const { StatusCodes } = require('http-status-codes');
const v1Router = Router();

v1Router.get('/health', (req, res) => {
    return res.status(StatusCodes.OK).json({
        message: "api is running without any error",
        status: StatusCodes.OK,
        data: null
    })
})

v1Router.use('/user', userRouter)

module.exports = { v1Router }
