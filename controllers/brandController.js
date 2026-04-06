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
    console.log(response);  
    res.redirect('/brands');
}

module.exports = {
    getBrands,
    postEditBrandName
}