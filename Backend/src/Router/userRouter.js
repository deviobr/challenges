const { Router } = require('express');
const userController = require('../Controllers/user.Controller');

const router = Router();

router.get('/', userController.read);
router.get('/search', userController.readOne);
router.post('/requests', userController.create);
router.get('/payment/:id', userController.payment);

module.exports = router;