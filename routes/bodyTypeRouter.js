const { Router } = require('express');
const bodyTypeRouter = Router();
const bodyTypeController = require('../controllers/bodyTypeController');

bodyTypeRouter.get('/', bodyTypeController.getBodyTypes);
bodyTypeRouter.post('/update/:id', bodyTypeController.postEditBodyType);
bodyTypeRouter.delete('/delete/:id', bodyTypeController.deleteBodyType);
bodyTypeRouter.post('/create',bodyTypeController.createBodyType)

module.exports = bodyTypeRouter;