const express = require("express");

const User = require("../Models/user.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    // console.log("from signup:", req.body);
    // const productByMobile = await User.findOne({ email: req.body.email })

    //   .lean()
    //   .exec();
    // console.log("productByMobile:", productByMobile);
    // if (productByMobile) {
    //   throw new Error("Please try with a different email address");
    // }

    const user = await User.create(req.body);
    console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    // console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/data", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    // console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.get("/:id", async (req, res) => {
  console.log("req:", req.params.id);
  try {
    const user = await User.findById(req.params.id).lean().exec();
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

// &&&&&&&&&&&&&&&&&&& bals code
router.patch("/updateCart/:userId", async (req, res) => {
  console.log("hai");
  try {
    let product = req.body;
    console.log("from update", product);

    let result = await User.findByIdAndUpdate(req.params.userId, {
      $push: { cartItems: product },
    })
      .lean()
      .exec();

    res.status(200).send(result);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
