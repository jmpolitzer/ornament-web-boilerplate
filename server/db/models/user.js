const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      trim: true
    },
    hash_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.prototype.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  }

  return User;
};
