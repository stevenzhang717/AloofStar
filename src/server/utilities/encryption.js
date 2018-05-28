const bcrypt = require('bcrypt');
const { promisify } = require('util');

function hash(plainPassword) {
  const genSaltPromise = promisify(bcrypt.genSalt);
  const hashPromise = promisify(bcrypt.hash);

  return genSaltPromise().then(salt => hashPromise(plainPassword, salt));
}

function match(plainPassword, encrypted) {
  const comparePromise = promisify(bcrypt.compare);
  return comparePromise(plainPassword, encrypted);
}

module.exports = {
  hash,
  match
};
