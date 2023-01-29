const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    amountForPayment: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true
  });

  User.associate = (models) => {
    User.hasMany(models.UserProd, {
      foreignKey: 'UserId', as: 'UserProds'
    });

    User.hasMany(models.UserProd, {
      foreignKey: 'productId', as: 'UserProds'
    });
  }

  return User;
}

module.exports = UserModel;
