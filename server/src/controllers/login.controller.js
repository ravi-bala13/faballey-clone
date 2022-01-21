const express = require("express");

const Login = require("../Models/user.login.model");

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const user = await Login.find().populate("product").lean().exec();
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).send({ message: e.message, status: "failed" });
    }
});

router.post("", async (req, res) => {
    try {
        console.log(req.body);
        const user = await Login.create(req.body);
        console.log("user:", cart);
        return res.status(201).send(cart);
    } catch (e) {
        // console.log(e);
        return res.status(500).send({ message: e.message, status: "failed" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

module.exports = router;