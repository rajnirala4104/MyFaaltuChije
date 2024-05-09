const { Router } = require('express');
const { userControllers } = require('./user.controllers');
const { protect } = require('../../middlewares/authUser');
const userRouter = Router();

userRouter.post('/registration', userControllers.registration);
userRouter.post('/login', userControllers.login);
userRouter.put('/update', protect, userControllers.update);
userRouter.delete('/delete', protect, userControllers.delete);

module.exports = { userRouter }