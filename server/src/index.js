const express = require('express');

const product = require("./controllers/product.controller");

const user = require("./controllers/user.controller")

const app = express();

app.use(express.json());

app.use("/", product);

app.use("/user", user)

module.exports = app;