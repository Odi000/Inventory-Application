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

module.exports = {
    getAll,
    getByBodyType,
    getByBrand
}