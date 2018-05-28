const express = require('express');
const postRouter = require('./controllers/post');
const userRouter = require('./controllers/user');

const restRouter = express.Router();
restRouter.use('/users', userRouter);
restRouter.use('/posts', postRouter);

module.exports = restRouter;
