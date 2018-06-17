const models = require('../../model');
const constants = require('../../../constants');

function handle(...args) {
  const result = args.map(x => x.get({ plain: true }));
  return result;
}

function getAllPosts(req, res) {
  models.post.findAll().spread((...args) => {
    res.json(handle(...args));
  });
}

function getPost(req, res) {
  models.post.findOne({ where: { id: Number(req.params.postId) } }).then(result => {
    res.json({ id: result.id, title: result.title, content: result.content });
  });
}

function savePost(req, res) {
  if (!req.user) {
    res.status(403).json({ erro: constants.postsError.UNAUTHORIZED });
  }

  models.post.create({ ...req.body, userId: req.user.id }).then(result => {
    res.json(result);
  });
}

module.exports = { getAllPosts, savePost, getPost };
