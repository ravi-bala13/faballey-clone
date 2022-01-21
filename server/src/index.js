const express = require("express");

// const cors = require("cors");
const app = express();

app.use(express.json());

// app.use(cors());

const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");
const cartController = require("./controllers/cart.controller");
const signUp = require("./controllers/user.controller");

app.use("/products", productController);

app.use("/cart", cartController);

app.use("/productDetail", productDetailsController);

app.use("/users", signUp);

module.exports = app;
