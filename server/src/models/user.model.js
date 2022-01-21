const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: false, unique: true },
    Name: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    address: [{ type: String, required: false }],

    payment: [{ type: String, required: false }],
    username: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: { type: Number, default: 1 },
        // price: { type: Number, default: 0 },
      },
    ],
    bagItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        // price: { type: Number, default: 0 },
      },
    ],
    active: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);

      return resolve(same);
    });
  });
};

module.exports = mongoose.model("user", userSchema);
