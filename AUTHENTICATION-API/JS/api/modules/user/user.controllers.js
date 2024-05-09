const expressAsyncHandler = require('express-async-handler')

const userControllers = {
    registration: expressAsyncHandler(async (req, res) => { }),
    login: expressAsyncHandler(async (req, res) => { }),
    update: expressAsyncHandler(async (req, res) => { }),
    delete: expressAsyncHandler(async (req, res) => { })
}

module.exports = { userControllers }