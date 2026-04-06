const express = require('express');
const path = require('node:path');
const app = express();
const indexController = require('./controllers/indexController');
const inventoryRouter = require('./routes/inventoryRouter');
const bodyTypeRouter = require('./routes/bodyTypeRouter');
const brandRouter = require('./routes/brandRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/inventory', inventoryRouter);
app.use('/body-type', bodyTypeRouter);
app.use('/brands', brandRouter);
app.get('/', indexController.get);


const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log('Running on: ', `http://localhost:${PORT}/`)
})