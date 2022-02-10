const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");
const cartController = require("./controllers/cart.controller");
const signUp = require("./controllers/user.controller");
const login = require("./controllers/login.controller")

app.use("/", productController);

app.use("/cart", cartController);

app.use("/productDetail", productDetailsController);

app.use("/users", signUp);

app.use("/login", login);

module.exports = app;
