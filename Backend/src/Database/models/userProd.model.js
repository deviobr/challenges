const UserProdModel = (sequelize, DataTypes) => {
  const UserProd = sequelize.define('UserProd', {
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    requests: DataTypes.INTEGER,
    fullPrice: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'userProds',
    underscored: true
  });

  UserProdModel.associate = (models) => {
    UserProdModel.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'Users',
      through: UserProdModel,
      otherKey: 'productId'
    });

    UserProdModel.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'Products',
      through: UserProdModel,
      otherKey: 'userId'
    });

    UserProdModel.belongsTo(models.Kitchen, {
      foreignKey: 'userId', as: 'Kitchens'
    });

    UserProdModel.belongsTo(models.Kitchen, {
      foreignKey: 'productId', as: 'Kitchens'
    });
  }

  return UserProd;
}

module.exports = UserProdModel;
