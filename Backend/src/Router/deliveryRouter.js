const { Router } = require('express');
const deliveryController = require('../Controllers/delivery.Controller');

const router = Router();

router.get('/delivery/:id', deliveryController.delivery);
router.patch('/finalize/request/:id', deliveryController.finalize);
router.get('/next', deliveryController.next);
router.get('/request/:id', deliveryController.request);
router.delete('/delete/request/:id', deliveryController.delete);

module.exports = router;
