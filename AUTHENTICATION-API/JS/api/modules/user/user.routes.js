const { Router } = require('express');
const { userControllers } = require('./user.controllers');
const userRouter = Router();

userRouter.get('/', () => { });
userRouter.post('/registration', userControllers.registration);
userRouter.post('/login', userControllers.login);
userRouter.put('/update', userControllers.update);
userRouter.delete('/delete', userControllers.delete);

module.exports = { userRouter }