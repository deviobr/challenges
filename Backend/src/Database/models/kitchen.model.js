const KitchenModel = (sequelize, DataTypes) => {
  const Kitchen = sequelize.define('Kitchen', {
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
    isDone: DataTypes.TINYINT,
  },
  {
    timestamps: false,
    tableName: 'kitchens',
    underscored: true
  });

  Kitchen.associate = (models) => {
    Kitchen.hasOne(models.UserProd, {
      foreignKey: 'userId', as: 'UserProds'
    });

    Kitchen.hasOne(models.UserProd, {
      foreignKey: 'productId', as: 'UserProds'
    });
  }

  return Kitchen;
}

module.exports = KitchenModel;
