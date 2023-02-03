const userService = require('../Services/user.Services');
const productServices = require('../Services/product.Services');
const validations = require('../utils/validations');
const { User } = require('../Database/models');

const userController = {
  read: async (_req, res) => {
    const result = await userService.read();

    res.status(200).json(result);
  },
  readOne: async (req, res) => {
    // /search?q=
    const { q } = req.query;
    const result = await userService.readOne(q);

    res.status(200).json(result);
  },
  create: async (req, res) => {
    const data = validations.validateRecipes(req.body);
    const { product_ids } = data;

    await Promise.all(product_ids.map((id) => productServices.readOne(id)));

    const result = await userService.create(data);

    res.status(201).json(result);
  },
  payment: async (req, res) => {
    const ID = req.params.id;

    // fiz isso somente pelo teste, pois no teste unitario ele não tras o nome id somente o numero,
    // ai o teste quebrava, pois, o validateId espera que venha o nome "id";
    const id = ID;

    const data = await validations.validateId(id);
    const result = await userService.payment(data);

    res.status(200).json(result);
  },
};

module.exports = userController;
