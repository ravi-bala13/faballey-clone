const jwt = require("jsonwebtoken");
require("dotenv").config();
const { check, validationResult } = require('express-validator');
const User = require("../models/user.model")

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {

  let user;
  try {
    [

      check('email', 'Please make sure your email is valid').isEmail(),
      check(
        'password',
        'Please enter a password with 8 or more characters'
      ).isLength({ min: 8 }),
      check(
        'password',
        'Pease enter a password with 20 or less characters'
      ).isLength({ max: 20 })
    ]
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user = await User.findOne({ email: req.body.email })

    if (user) return res.status(400).send({ message: "Please check your email and password" });

    user = await User.create(req.body);

    const token = newToken(user)

    return res.status(200).send({ user, token });

  } catch (err) {
    return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
  }
}

const login = async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email })

    if (!user) return res.status(400).send({ message: "Please check your email and password" });

    let match = user.checkPassword(req.body.password);

    if (!match) return res.status(400).send({ message: "Please check your email and password" });

    const token = newToken(user)

    return res.status(200).send({ user, token });

  } catch (err) {
    return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
  }
}

module.exports = { register, login, newToken }