'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserProds', {
      user_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      full_price: Sequelize.INTEGER,
      is_done: Sequelize.TINYINT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserProds');  
  }
};