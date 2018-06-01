const models = require('../../model');

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
  models.post.create(req.body).then(result => {
    res.json(result);
  });
}

module.exports = { getAllPosts, savePost };
