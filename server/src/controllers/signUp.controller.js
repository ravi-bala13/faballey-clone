const express = require("express");

const User = require("../Models/user.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().populate("product").lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.post("", async (req, res) => {
  try {
    console.log("from signup:", req.body);
    const productByMobile = await User.findOne({ mobile: req.body.mobile })
      .lean()
      .exec();
    if (productByMobile) {
      throw new Error("Please try with a different email address");
    }
    // return true;

    const user = await User.create(req.body);
    console.log("user:", user);
    return res.status(201).send(user);
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
