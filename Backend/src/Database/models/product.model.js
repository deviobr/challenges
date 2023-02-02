const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    code: DataTypes.BIGINT,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'Products',
    underscored: true
  });

  return Product;
}

module.exports = ProductModel;
