// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());             // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Default route for frontend (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Store API. Use /api/products to view products.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
