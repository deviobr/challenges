const Joi = require("joi");
const { User } = require('../Database/models');

const validations = {
  validateRecipes: (data) => {
    const schema = Joi.object({
      user_id: Joi.number().required(),
      full_price: Joi.number().required(),
      is_done: Joi.number().required(),
      product_ids: Joi.array().required(),
    });

    const { error, value } = schema.validate(data);

    if (error) {
      error.name = 'ValidationError';
      error.message = 'All required fields are missing';
      throw error;
    }

    return value;
  },
  validateId: async (id) => {
    if (!id.length) {
      const error = new Error('id field is required');
      error.name = 'BadRequests';

      throw error;
    };
    const existsId = await User.findOne({ where: { id } });
    if (!existsId) {
      const error = new Error('id not found');
      error.name = 'NotFound';

      throw error;
    };

    return id;
  },
};

module.exports = validations;
