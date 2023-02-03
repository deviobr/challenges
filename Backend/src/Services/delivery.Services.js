const { User, UserProd } = require('../Database/models');

const deliveryService = {
  delivery: async (userId) => {
    const result = await User.findByPk(userId, {
      attributes: { exclude: ['id', 'amount_for_payment'] },
      include: [ { model: UserProd, as: 'UserProds' } ]
    });

    return result;
  },
  finalize: async (userId) => {
    await UserProd.update({ is_done: 0 }, { where: { user_id: userId } });
  },
  next: async () => {
    const result = await UserProd.findAll();
    const requestNext = await result.filter(({ is_done }) => is_done != 0);

    return requestNext;
  },
  request: async (userId) => {
    const result = await User.findByPk(userId, {
      attributes: { exclude: ['id', 'amount_for_payment'] },
      include: [ { model: UserProd, as: 'UserProds' } ]
    });
    const request = result.UserProds;
    const requestNext = await request.filter((next) => next.is_done != 0);

    // se for diferente, significa que o pedido já foi concluido
    if (!requestNext.length) return { message: 'The order is already done' }

    return requestNext;
  },
  delete: async (userId) => {
    const result = await UserProd.findByPk(userId);
    // const request = await result.filter(({ is_done }) => is_done == 0);

    if (result.is_done === 0) {
      await UserProd.destroy({ where: { user_id: userId} });
    }
  }
}

module.exports = deliveryService;
