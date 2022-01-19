const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.post("/product", async function (req, res) {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/productData", async function (req, res) {
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product);
    } catch (e) {
        return res
            .status(500)
            .json({
                message: e.message,
                status: "failed send coursesData in the controller",
            });
    }
});
router.get("/product/:id", async function (req, res) {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product);
    } catch (e) {
        return res
            .status(500)
            .json({
                message: e.message,
                status: "failed send coursesData in the controller",
            });
    }
});

module.exports = router;