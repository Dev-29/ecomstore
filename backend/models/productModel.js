const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is required"],
    },
    description: {
        type: String,
        required: [true, "Product Description is required"],
    }
})