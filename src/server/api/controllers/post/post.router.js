const express = require('express');
const postController = require('./post.controller');
const jwt = require('express-jwt');

const postRouter = express.Router();

postRouter
  .route('/')
  .get(postController.getAllPosts)
  .post(jwt({ secret: process.env.SECRET_KEY }), postController.savePost);

postRouter.route('/:postId').get(postController.getPost);

module.exports = postRouter;
