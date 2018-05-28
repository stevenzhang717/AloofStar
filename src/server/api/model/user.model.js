const db = require('../../db');
const Sequelize = require('sequelize');

const User = db.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: Sequelize.TEXT, unique: true, validate: { notEmpty: true, notNull: true } },
    password_hashed: { type: Sequelize.TEXT, validate: { notEmpty: true, notNull: true } }
  },
  { freezeTableName: true }
);

module.exports = User;
