const db = require('../../db');
const Sequelize = require('sequelize');

const Post = db.define(
  'post',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    title: Sequelize.TEXT,
    content: Sequelize.TEXT
  },
  { freezeTableName: true }
);

module.exports = Post;
