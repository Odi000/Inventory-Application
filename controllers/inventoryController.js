const db = require('../db/queries');
const title = "SM Auto";


async function getAll(req, res) {
    const result = (await db.getAllCars()).rows;
    res.render('inventory', { title, products: result })
}

async function getByBodyType(req, res) {
    const bodyTypeID = req.params.id;
    const result = (await db.filterByBody(bodyTypeID)).rows;

    res.render('inventory', { title, products: result })
}

async function getByBrand(req, res) {
    const brandId = req.params.id;
    const result = (await db.filterByBrand(brandId)).rows;

    res.render('inventory', { title, products: result });
}

async function getEditForm(req, res) {
    const title = "Edit Car information";
    const id = req.params.id;
    const car = (await db.getCarById(id)).rows[0];
    const brands = (await db.getBrands()).rows;
    const bodyTypes = (await db.getBodyTypes()).rows;

    res.render('editCarForm', { title, car, brands, bodyTypes })
}

async function postEditForm(req, res) {
    const updatedCarInfo = { ...req.body, id: req.params.id };
    console.log(updatedCarInfo)
    db.editCarById(updatedCarInfo);

    res.redirect('/inventory')
}

async function getCreateCarForm(req, res) {
    const title = "Add new Car information";
    const brands = (await db.getBrands()).rows;
    const bodyTypes = (await db.getBodyTypes()).rows;

    res.render('newCarForm', { title, brands, bodyTypes });
}

async function postCreateCarForm(req, res) {
    const car = req.body;
    await db.addCar(car);
    res.redirect('/inventory');
}

async function deleteCar(req, res) {
    const id = req.params.id;
    const response = await db.deleteCar(id);
    const result = Boolean(response);
    res.json(result);
}

module.exports = {
    getAll,
    getByBodyType,
    getByBrand,
    getEditForm,
    postEditForm,
    getCreateCarForm,
    postCreateCarForm,
    deleteCar
}