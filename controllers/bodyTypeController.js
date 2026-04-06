const db = require('../db/queries');
const title = "SM Auto car types";

async function getBodyTypes(req, res) {
    const bodyTypes = (await db.getBodyTypes()).rows;

    res.render('types', { title, bodyTypes })
}

module.exports = {
    getBodyTypes
}