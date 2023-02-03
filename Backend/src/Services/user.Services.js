const { Product, UserProd, User } = require('../Database/models');

const userService = {
  read: async () => {
    const products = await Product.findAll();

    return products;
  },
  readOne: async (data) => {
    const nameSearch = await Product.findOne({ where: { name: data } });
    const codeSearch = await Product.findOne({ where: { code: data } });
    
    // se for falso significa que é um número:
    if (!isNaN(data)) return codeSearch;

    return nameSearch;
  },
  create: async (data) => {
    const { full_price, is_done, product_ids } = data;
    const request = await User.findByPk(data.user_id);

    const user_id = request.id;

    const created = await Promise.all(product_ids.map((product_id) => UserProd.create({
      user_id, product_id, full_price, is_done
    })));

    return created;
  },
  payment: async (userId) => {
    const { amount_for_payment } = await User.findByPk(userId);
    const { full_price } = await UserProd.findOne({ where: { user_id: userId } });

    const discount = amount_for_payment - full_price;

    return { "total": full_price, "discount": discount };
  },
};

module.exports = userService;
