const { Router } = require('express');
const inventoryRouter = Router();
const inventroyController = require('../controllers/inventoryController');

inventoryRouter.get('/brands/:id', inventroyController.getByBrand)
inventoryRouter.get('/body-type/:id', inventroyController.getByBodyType)
inventoryRouter.get('/edit/:id', inventroyController.getEditForm)
inventoryRouter.post('/edit/:id', inventroyController.postEditForm)
inventoryRouter.get('/create',inventroyController.getCreateCarForm)
inventoryRouter.post('/create',inventroyController.postCreateCarForm)
inventoryRouter.delete('/delete/:id',inventroyController.deleteCar)
inventoryRouter.get('/', inventroyController.getAll);

module.exports = inventoryRouter;