const { Router } = require('express');
const brandRouter = Router();
const brandController = require('../controllers/brandController');

brandRouter.get('/', brandController.getBrands);
brandRouter.post('/update/:id', brandController.postEditBrandName);
brandRouter.delete('/delete/:id', brandController.deleteBrand);
brandRouter.post('/create', brandController.createBrand)

module.exports = brandRouter;