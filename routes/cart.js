// routes/products.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load product data from JSON file
const productsFilePath = path.join(__dirname, '../data/products.json');

const getProducts = () => {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data);
};


router.get('/', (req, res) => {
    const products = getProducts();
    res.json(products);
});

module.exports = router;
