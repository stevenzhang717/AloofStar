const Sequelize = require('sequelize');
const path = require('path');

const PROJECT_ROOT_PATH = path.join(__dirname, '..', '..');

const sequalize = new Sequelize({
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: x => console.log(x),
  storage: path.join(PROJECT_ROOT_PATH, 'db', `aloofStar-dev.sqlite`)
});

module.exports = sequalize;
