const express = require('express');

const product = require("./controllers/product.controller")

const app = express();

app.use(express.json());

app.use("/", product);

module.exports = app;