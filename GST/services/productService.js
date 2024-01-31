// services/productService.js
const Product = require('../models/productModel');

const calculateGSTAmount = (totalAmount, taxSlab) => {
    const gstAmount = (totalAmount * taxSlab) / (100 + taxSlab);
    return gstAmount;
};

const calculateNetPrice = (totalAmount, gstAmount) => {
    return totalAmount - gstAmount;
};

const productService = {
    getAllProducts: async () => {
        return await Product.find();
    },

    getProductById: async (productId) => {
        return await Product.findById(productId);
    },

    getProductByName: async (productName) => {
        return await Product.findOne({ name: productName });
    },

    addProduct: async (productData) => {
        const { totalAmount, taxSlab, ...rest } = productData;

        const gstAmount = calculateGSTAmount(totalAmount, taxSlab);
        const netPrice = calculateNetPrice(totalAmount, gstAmount);

        const newProduct = new Product({
            ...rest,
            totalAmount,
            taxSlab,
            gstAmount,
            netPrice
        });

        return await newProduct.save();
    },

    updateProduct: async (productId, updatedData) => {
        const { totalAmount, taxSlab, ...rest } = updatedData;

        const gstAmount = calculateGSTAmount(totalAmount, taxSlab);
        const netPrice = calculateNetPrice(totalAmount, gstAmount);

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                ...rest,
                totalAmount,
                taxSlab,
                gstAmount,
                netPrice
            },
            { new: true }
        );

        return updatedProduct;
    },

    deleteProduct: async (productId) => {
        return await Product.findByIdAndDelete(productId);
    }
};

module.exports = productService;
