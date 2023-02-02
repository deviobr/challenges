const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    amount_for_payment: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true
  });

  User.associate = (models) => {
    User.hasMany(models.UserProd, {
      foreignKey: 'user_id', as: 'UserProds'
    });
  }

  return User;
}

module.exports = UserModel;
