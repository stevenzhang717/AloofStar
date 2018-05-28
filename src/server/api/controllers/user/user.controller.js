const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');
const utilities = require('../../../utilities');
const { loginErrors, signupError, sessionError } = require('../../../constants');

function createToken(user) {
  return jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_KEY, {
    expiresIn: '7d',
    jwtid: uuid()
  });
}

function signin(req, res) {
  if (!req.body.username) {
    res.status(400).json({ error: sessionError.EMPTY_USERNAME });
    return;
  }

  if (!req.body.password) {
    res.status(400).json({ error: sessionError.EMPTY_PASSWORD });
    return;
  }

  User.findOne({ where: { name: req.body.username }, rejectOnEmpty: true })
    .then(found =>
      utilities
        .match(req.body.password, found.password_hashed)
        .then(
          matched =>
            matched
              ? res.json({ token: createToken(found) })
              : res.status(401).json({ error: loginErrors.WRONG_PASSWORD })
        )
    )
    .catch(() => res.status(401).json({ error: loginErrors.USER_NOT_EXIST }));
}

function signup(req, res) {
  if (!req.body.username) {
    res.status(400).json({ error: sessionError.EMPTY_USERNAME });
    return;
  }

  if (!req.body.password) {
    res.status(400).json({ error: sessionError.EMPTY_PASSWORD });
    return;
  }

  utilities.hash(req.body.password).then(hash => {
    User.create({ name: req.body.username, password_hashed: hash })
      .then(result => {
        res.json({ token: createToken(result) });
      })
      .catch(error => {
        if (error.errors[0].path === 'name' && error.errors[0].type === 'unique violation') {
          res.status(400).json({ error: signupError.USED_USERNAME });
        }
      });
  });
}

module.exports = { signin, signup };
