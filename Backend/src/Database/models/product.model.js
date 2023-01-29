const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true
  });

  Product.associate = (models) => {
    Product.hasMany(models.UserProd, {
      foreignKey: 'productId', as: 'UserProds'
    })
  }

  return Product;
}

module.exports = ProductModel;
