const db = require('../db/queries');
const title = "SM Auto car types";

async function getBodyTypes(req, res) {
    const bodyTypes = (await db.getBodyTypes()).rows;

    res.render('types', { title, bodyTypes })
}

async function postEditBodyType(req, res) {
    const bodyId = req.params.id;
    const newValue = req.body.bodyName;
    const response = await db.editBodyType(bodyId, newValue);

    res.redirect('/body-type');
}

async function deleteBodyType(req, res) {
    const bodyId = req.params.id;
    const response = await db.deleteBodyType(bodyId);
    res.json({ response });
}

async function createBodyType(req, res) {
    const name = req.body.name;
    const result = await db.createBodyType(name);
    res.redirect('/body-type');
}

module.exports = {
    getBodyTypes,
    postEditBodyType,
    deleteBodyType,
    createBodyType
}