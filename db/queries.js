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

async function editBodyType(bodyId, newValue) {
    return await pool.query('UPDATE body SET name = $2 WHERE id = $1', [bodyId, newValue])
}

async function deleteBodyType(bodyId) {
    const length = (await filterByBody(bodyId)).rowCount;
    let result = false;

    if (!length) {
        const response = await pool.query('DELETE FROM body WHERE id = $1', [bodyId]);
        console.log(response);
        result = true;
    }

    return result;
}

async function deleteBrand(brandId) {
    const length = (await filterByBrand(brandId)).rowCount;
    let result = false;

    if (!length) {
        const response = await pool.query('DELETE FROM brands WHERE id = $1', [brandId]);
        console.log(response);
        result = true;
    }

    return result;
}

async function createBodyType(name) {
    return await pool.query('INSERT INTO body (name) VALUES ($1)', [name]);
}

async function createBrand(name) {
    return await pool.query('INSERT INTO brands (name) VALUES ($1)', [name]);
}

module.exports = {
    getAllCars,
    getBodyTypes,
    filterByBody,
    getBrands,
    filterByBrand,
    editBrand,
    editBodyType,
    deleteBodyType,
    deleteBrand,
    createBodyType,
    createBrand
}