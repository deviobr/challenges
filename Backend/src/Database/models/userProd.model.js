const UserProdModel = (sequelize, DataTypes) => {
  const UserProd = sequelize.define('UserProd', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'cascade',
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      },
      primaryKey: true,
      onDelete: 'cascade',
    },
    full_price: DataTypes.INTEGER,
    is_done: DataTypes.TINYINT,
  },
  {
    timestamps: false,
    tableName: 'UserProds',
    underscored: true
  });

  UserProdModel.associate = (models) => {
    UserProdModel.belongsToMany(models.User, {
      as: 'Users',
      through: UserProdModel,
      foreignKey: 'user_id',
      otherKey: 'product_id'
    });

    UserProdModel.belongsToMany(models.Product, {
      as: 'Products',
      through: UserProdModel,
      foreignKey: 'product_id',
      otherKey: 'user_id'
    });
  }

  return UserProd;
}

module.exports = UserProdModel;
