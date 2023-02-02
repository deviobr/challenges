module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          id: 1,
          name: 'arroz',
          code: 101,
          quantity: 3,
          price: 10
        },
        {
          id: 2,
          name: 'feijao',
          code: 202,
          quantity: 3,
          price: 7
        },
        {
          id: 3,
          name: 'salada',
          code: 303,
          quantity: 5,
          price: 7
        },
        {
          id: 4,
          name: 'frango',
          code: 404,
          quantity: 8,
          price: 10
        },
        {
          id: 5,
          name: 'carne vermelha',
          code: 505,
          quantity: 2,
          price: 20
        }
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};