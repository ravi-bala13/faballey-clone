// const express = require('express');

// const router = express.Router();

// const User = require("../models/user.model")

// const authenticate = require('../middlewares/authenticate')

// router.patch("/update",authenticate,async function (req, res) {
//        const item = await User.findByIdAndUpdate(req.user._id, req.body, {new: true}).lean().exec();
//        return res.status(200).send({item}); 
//     })
// module.exports = router; 
const express = require('express');

const router = express.Router();

const User = require('../models/user.model')

router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).json({ message: err.message, status: "Failed" });
    }
});



module.exports = router;