const Post = require('../../model/post.model');

function handle(...args) {
  const result = args.map(x => x.get({ plain: true }));
  return result;
}

function getAllPosts(req, res) {
  Post.findAll().spread((...args) => {
    res.json(handle(...args));
  });
}

function savePost(req, res) {
  Post.create(req.body).then(result => {
    res.json(result);
  });
}

module.exports = { getAllPosts, savePost };
