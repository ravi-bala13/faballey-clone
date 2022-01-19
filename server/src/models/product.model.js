const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    size: [{
        type: String,
        required: true
    }],
    img: [{
        type: String,
        required: true
    }],
    details: [{ type: String, required: false }],
    statusProduct: { type: String, required: false },
    tags: [{
        type: String,
        required: true,
    }],
    category: [{
        type: String,
        required: true,
    }]

}, {
    versionKey: false,
    timestamps: true,
})


module.exports = mongoose.model("product", productSchema);