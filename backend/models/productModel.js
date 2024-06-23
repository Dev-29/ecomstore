const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is required"],
    },
    description: {
        type: String,
        required: [true, "Product Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"],
        maxLength: [8, "product Price should not be greater than 8"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Product Category is required"],
    },
    Stock: {
        type: Number,
        required: [true, "Product Stock is required"],
        maxLength: [4, "Product Stock can't exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema);