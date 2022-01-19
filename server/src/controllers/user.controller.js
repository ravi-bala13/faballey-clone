const express = require("express");
const User = require("../models/user.model");


const router = express.Router();

router.post("/", async function (req, res) {
    try {
        const user = await User.create(req.body);
        return res.status(200).send(user);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/", async function (req, res) {
    try {
        const user = await User.find().populate({ path: "productId", select: "name" }).lean().exec();
        console.log(user);
        return res.status(200).send(user);
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