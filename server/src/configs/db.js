const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ravibala-13:bals1999@cluster0.hfo0i.mongodb.net/faballey"
  );
  // return mongoose.connect("mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/faballey");
};
