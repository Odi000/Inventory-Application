#! /usr/bin/env node
const { Client } = require("pg");
const client = new Client({
    connectionString: process.env.DATABASE_URL
});
const brands = ["Toyota", "Tesla", "BMW", "Ford", "Mercedes-Benz", "Skoda"];
const bodyTypes = ["Sedan", "Estate", "SUV", "Coupe", "Pickup"];
const models = [
    { "model": "Corolla", "brand_id": 1, "body_type_id": 1 },
    { "model": "Camry", "brand_id": 1, "body_type_id": 1 },
    { "model": "RAV4", "brand_id": 1, "body_type_id": 3 },
    { "model": "Prius", "brand_id": 1, "body_type_id": 1 },
    { "model": "Model 3", "brand_id": 2, "body_type_id": 1 },
    { "model": "Model Y", "brand_id": 2, "body_type_id": 3 },
    { "model": "Model S", "brand_id": 2, "body_type_id": 1 },
    { "model": "Model X", "brand_id": 2, "body_type_id": 3 },
    { "model": "3 Series", "brand_id": 3, "body_type_id": 1 },
    { "model": "5 Series", "brand_id": 3, "body_type_id": 1 },
    { "model": "X5", "brand_id": 3, "body_type_id": 3 },
    { "model": "M4", "brand_id": 3, "body_type_id": 4 },
    { "model": "F-150", "brand_id": 4, "body_type_id": 5 },
    { "model": "Mustang", "brand_id": 4, "body_type_id": 4 },
    { "model": "Explorer", "brand_id": 4, "body_type_id": 3 },
    { "model": "Escape", "brand_id": 4, "body_type_id": 3 },
    { "model": "S-Class", "brand_id": 5, "body_type_id": 1 },
    { "model": "C-Class", "brand_id": 5, "body_type_id": 1 },
    { "model": "GLE", "brand_id": 5, "body_type_id": 3 },
    { "model": "EQS", "brand_id": 5, "body_type_id": 1 },
    { "model": "Octavia", "brand_id": 6, "body_type_id": 2 },
    { "model": "Superb", "brand_id": 6, "body_type_id": 2 },
    { "model": "Kodiaq", "brand_id": 6, "body_type_id": 3 },
    { "model": "Enyaq", "brand_id": 6, "body_type_id": 3 }
]

const addColumnPrice = [
    { "id": 1, "model": "Corolla", "price": 32500 },
    { "id": 2, "model": "Camry", "price": 45800 },
    { "id": 3, "model": "RAV4", "price": 41200 },
    { "id": 4, "model": "Prius", "price": 43900 },
    { "id": 5, "model": "Model 3", "price": 42990 },
    { "id": 6, "model": "Model Y", "price": 44990 },
    { "id": 7, "model": "Model S", "price": 94990 },
    { "id": 8, "model": "Model X", "price": 101990 },
    { "id": 9, "model": "3 Series", "price": 55200 },
    { "id": 10, "model": "5 Series", "price": 66400 },
    { "id": 11, "model": "X5", "price": 89300 },
    { "id": 12, "model": "M4", "price": 115000 },
    { "id": 13, "model": "F-150", "price": 82000 },
    { "id": 14, "model": "Mustang", "price": 59900 },
    { "id": 15, "model": "Explorer", "price": 48500 },
    { "id": 16, "model": "Escape", "price": 36200 },
    { "id": 17, "model": "S-Class", "price": 112000 },
    { "id": 18, "model": "C-Class", "price": 52400 },
    { "id": 19, "model": "GLE", "price": 85600 },
    { "id": 20, "model": "EQS", "price": 109500 },
    { "id": 21, "model": "Octavia", "price": 30800 },
    { "id": 22, "model": "Superb", "price": 41500 },
    { "id": 23, "model": "Kodiaq", "price": 43200 },
    { "id": 24, "model": "Enyaq", "price": 48900 }
]

async function populateBrandsTable(table, dataArray) {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');

        for (const el of dataArray) {
            await client.query(
                `UPDATE ${table} SET price = $1 WHERE id = $2;`,
                [el.price, el.id]
            );
        }
    } catch (err) {
        console.log("Error message:", err.message);
    } finally {
        await client.end();
        console.log("Connection closed");
    }
};