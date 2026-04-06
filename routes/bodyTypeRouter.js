const { Router } = require('express');
const bodyTypeRouter = Router();
const bodyTypeController = require('../controllers/bodyTypeController');

bodyTypeRouter.get('/', bodyTypeController.getBodyTypes)

module.exports = bodyTypeRouter;