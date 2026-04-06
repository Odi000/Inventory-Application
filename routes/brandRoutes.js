const { Router } = require('express');
const brandRouter = Router();
const brandController = require('../controllers/brandController');

brandRouter.get('/', brandController.getBrands);
brandRouter.post('/update/:id', brandController.postEditBrandName);

module.exports = brandRouter;