const express = require('express');
const postController = require('./post.controller');

const postRouter = express.Router();

postRouter
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.savePost);

module.exports = postRouter;
