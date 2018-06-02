module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true }
    },
    password_hashed: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } }
  });

  User.associate = function associate(models) {
    User.hasMany(models.post, { foreignKey: { allowNull: false } });
  };

  return User;
};
