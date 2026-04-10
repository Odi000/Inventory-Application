const db = require('../db/queries');
const title = "SM Auto Brands";

async function getBrands(req, res) {
    const brands = (await db.getBrands()).rows;

    res.render('brands', { title, brands });
}

async function postEditBrandName(req, res) {
    const brandId = req.params.id;
    const newValue = req.body.brandName;
    const response = await db.editBrand(brandId, newValue);

    res.redirect('/brands');
}

async function deleteBrand(req, res) {
    const brandId = req.params.id;
    const response = await db.deleteBrand(brandId);
    res.json({ response });
}

async function createBrand(req, res) {
    const name = req.body.name;
    const result = await db.createBrand(name);
    res.redirect('/brands');
}

module.exports = {
    getBrands,
    postEditBrandName,
    deleteBrand,
    createBrand
}