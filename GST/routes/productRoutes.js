// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define routes
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.get('/products/name/:productName', productController.getProductByName);
router.post('/products', productController.addProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
