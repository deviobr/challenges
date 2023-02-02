const { Product } = require('../Database/models');

const userService = {
  readOne: async (id) => {
    
    try {
      await Product.findOne({ where: { id } });
      
      return true;
    } catch (e) {
      error.name = 'BadRequests';
      error.message = '"product_ids" not found'

      throw error;
    }
  },
};

module.exports = userService;
