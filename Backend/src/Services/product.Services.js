const { Product } = require('../Database/models');

const userService = {
  readOne: async (id) => {
    
    try {
      await Product.findOne({ where: { id } });
      
      return true;
    } catch (e) {
      const error = new Error('"product_ids" not found');
      error.name = 'BadRequests';
      throw error;
    }
  },
};

module.exports = userService;
