const express = require("express");

const User = require("../Models/user.model");

const router = express.Router();

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
router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const el = await User.findById(req.params.id).lean().exec();
    // console.log(el);
    return res.send(el);
  } catch (error) {
    res.send(error.message);
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
