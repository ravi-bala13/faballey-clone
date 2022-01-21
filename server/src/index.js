const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");
const cartController = require("./controllers/cart.controller");
const signUp = require("./controllers/signUp.controller");

const Login = require("./controllers/login.controller");

app.use("/products", productController);

app.use("/cart", cartController);

app.use("/productDetail", productDetailsController);

app.use("/signUp", signUp);

app.use("/login", Login);

module.exports = app;
