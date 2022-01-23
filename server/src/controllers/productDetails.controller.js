const express = require("express");

const Product = require("../models/product.model.js");

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log("req:", req.params.id);
  try {
    const product = await Product.findOne({ _id: req.params.id }).lean().exec();
    console.log("e1", product);
    return res.status(201).send(product);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
