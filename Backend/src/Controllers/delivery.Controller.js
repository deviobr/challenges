const deliveryService = require('../Services/delivery.Services');
const validations = require('../utils/validations');
const { User } = require('../Database/models');

const deliveryController = {
  delivery: async (req, res) => {
    const { id } = req.params;

    const data = await validations.validateId(User, id);
    const result = await deliveryService.delivery(data);

    res.status(200).json(result);
  },
  finalize: async (req, res) => {
    const { id } = req.params;

    const data = await validations.validateId(User, id);
    await deliveryService.finalize(data);

    res.sendStatus(204);
  },
  next: async (_req, res) => {
    const result = await deliveryService.next();

    res.status(200).json(result);
  },
  request: async (req, res) => {
    const { id } = req.params;

    const data = await validations.validateId(User, id);
    const result = await deliveryService.request(data);

    res.status(200).json(result);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const data = await validations.validateId(User, id);
    await deliveryService.delete(data);

    res.sendStatus(204);
  }
}

module.exports = deliveryController;
