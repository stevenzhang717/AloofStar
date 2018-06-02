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

function savePost(req, res) {
  if (!req.user) {
    res.status(403).json({ erro: constants.postsError.UNAUTHORIZED });
  }

  models.post.create({ ...req.body, userId: req.user.id }).then(result => {
    res.json(result);
  });
}

module.exports = { getAllPosts, savePost };
