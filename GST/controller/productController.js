// controllers/productController.js
const productService = require('../services/productService');

const productController = {
    getAllProducts: async (req, res) => {
        const products = await productService.getAllProducts();
        res.json(products);
    },

    getProductById: async (req, res) => {
        const product = await productService.getProductById(req.params.productId);
        res.json(product);
    },

    getProductByName: async (req, res) => {
        const product = await productService.getProductByName(req.params.productName);
        res.json(product);
    },

    addProduct: async (req, res) => {
        const productData = req.body;
        const newProduct = await productService.addProduct(productData);
        res.json(newProduct);
    },

    updateProduct: async (req, res) => {
        const productId = req.params.productId;
        const updatedData = req.body;
        const updatedProduct = await productService.updateProduct(productId, updatedData);
        res.json(updatedProduct);
    },

    deleteProduct: async (req, res) => {
        const productId = req.params.productId;
        const deletedProduct = await productService.deleteProduct(productId);
        res.json(deletedProduct);
    }
};

module.exports = productController;
