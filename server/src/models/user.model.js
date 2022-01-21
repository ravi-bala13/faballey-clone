const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("signUp", registerSchema);
