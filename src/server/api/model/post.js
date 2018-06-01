module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING
  });

  return Post;
};
