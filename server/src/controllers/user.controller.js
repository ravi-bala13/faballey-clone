const express = require('express');
const jwt = require('jsonwebtoken');

const newToken = user => {
    return jwt.sign({ user: user }, 'masaischool');
};

const authenticate = require('../middlewares/authenticate');

const User = require('../models/user.model');

const router = express.Router();

router.post('', async (req, res) => {
    const user = await User.create(req.body);
    const token = newToken(user);
    return res.status(201).json({ token: token });
});

router.get('/profile/:email', async (req, res) => {
    const user = await User.find({ email: req.params.email }).exec();
    const token = newToken(user[0]);
    return res.status(200).json({ user: user[0], token });
});
module.exports = router;