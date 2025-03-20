// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Dummy product data
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
];

// Home route to display products
app.get('/', (req, res) => {
    res.render('index', { products });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
