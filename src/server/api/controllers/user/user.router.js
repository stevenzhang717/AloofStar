const express = require('express');
const userController = require('./user.controller');

const userRouter = express.Router();
userRouter.route('/signup').post(userController.signup);
userRouter.route('/signin').post(userController.signin);

module.exports = userRouter;
