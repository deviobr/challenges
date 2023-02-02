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

    const { dataValues } = request;
    const user_id = dataValues.id;

    const test = await Promise.all(product_ids.map((product_id) => UserProd.create({
      user_id, product_id, full_price, is_done
    })));

    return test;
  },
  payment: async (userId) => {
    const result = await User.findByPk(userId, {
      include: [ { model: UserProd, as: 'UserProds' } ]
    });

    const total = result.UserProds[0].full_price;
    const discount = result.amount_for_payment - total;

    return { 'total': total, 'discount': discount };
  },
};

module.exports = userService;
