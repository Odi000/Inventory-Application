const { Router } = require('express');
const inventoryRouter = Router();
const inventroyController = require('../controllers/inventoryController');

inventoryRouter.get('/brands/:id',inventroyController.getByBrand)
inventoryRouter.get('/body-type/:id',inventroyController.getByBodyType)
inventoryRouter.get('/',inventroyController.getAll);

module.exports = inventoryRouter;