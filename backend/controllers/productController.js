const Product = require('../models/productModel');

// exports.createProduct = async(req, res, next) => {
//     const product = await Product.create(req.body);
//     res.status(201).json({
//         success: true,
//         product
//     })
// }

exports.createProduct = async (req, res, next) => {
    console.log(req.body); // Log the request body
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        console.error(error); // Log the error
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


exports.getAllProducts = (req, res) => {
    res.status(200).json({message:"route working fine"})
}