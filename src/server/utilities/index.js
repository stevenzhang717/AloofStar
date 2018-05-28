const encryption = require('./encryption');

module.exports = { hash: encryption.hash, match: encryption.match };
