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
    name: { type: Sequelize.TEXT, unique: true, allowNull: false, validate: { notEmpty: true } },
    password_hashed: { type: Sequelize.TEXT, allowNull: false, validate: { notEmpty: true } }
  },
  { freezeTableName: true }
);

module.exports = User;
