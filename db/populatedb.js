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

populateBrandsTable("model", models);

async function populateBrandsTable(table, dataArray) {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');

        for (const el of models) {
            await client.query(
                `INSERT INTO ${table} (name, body_type_id, brand_id) VALUES ($1,$2,$3);`,
                [el.model, el.body_type_id, el.brand_id]
            );
        }
    } catch (err) {
        console.log("Error message:", err.message);
    } finally {
        await client.end();
        console.log("Connection closed");
    }
};