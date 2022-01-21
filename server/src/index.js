const express = require('express');

app.use(express.json())
app.use(cors())

const productController = require("./controllers/product.controller")

// const bagController = require("./controllers/bag.controller.js");
const productDetailsController = require("./controllers/productDetails.controller");
const cartController = require("./controllers/cart.controller");

app.use("/products", productController)

app.use("/cart", cartController);
// app.use("/bag", bagController);

app.use("/productDetail", productDetailsController);


module.exports = app;