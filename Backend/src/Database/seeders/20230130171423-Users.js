module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          name: 'Manoel',
          amount_for_payment: 100
        },
        {
          id: 2,
          name: 'Eduardo',
          amount_for_payment: 50
        },
        {
          id: 3,
          name: 'Raimundo',
          amount_for_payment: 100
        }
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};