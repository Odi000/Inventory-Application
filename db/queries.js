const pool = require('./pool');

async function getAllCars() {
    const query = `
        SELECT model.name AS model, body.name AS body, brands.name AS brand, model.price
        FROM model
        INNER JOIN body
        ON model.body_type_id = body.id
        INNER JOIN brands
        ON model.brand_id = brands.id;
    `;

    return await pool.query(query);
}

async function getBodyTypes() {
    return await pool.query("SELECT * FROM body");
}

async function filterByBody(bodyId) {
    const query = `
        SELECT model.name AS model, body.name AS body, brands.name AS brand, model.price
        FROM model
        INNER JOIN body
        ON model.body_type_id = body.id
        INNER JOIN brands
        ON model.brand_id = brands.id
        WHERE body.id = $1;
    `;

    return await pool.query(query, [bodyId])
}

async function filterByBrand(brandId) {
    const query = `
        SELECT model.name AS model, body.name AS body, brands.name AS brand, model.price
        FROM model
        INNER JOIN body
        ON model.body_type_id = body.id
        INNER JOIN brands
        ON model.brand_id = brands.id
        WHERE brands.id = $1;
    `;

    return await pool.query(query, [brandId]);
}

async function getBrands() {
    return await pool.query('SELECT * FROM brands;')
}

async function editBrand(brandId, newValue) {
    return await pool.query('UPDATE brands SET name = $2 WHERE id = $1', [brandId, newValue])
}

module.exports = {
    getAllCars,
    getBodyTypes,
    filterByBody,
    getBrands,
    filterByBrand,editBrand
}