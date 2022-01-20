const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String, required: true }]
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function (err, same) {
            if (err) return reject(err);

            return resolve(same);
        });
    });
};

module.exports = mongoose.model("user", userSchema);

// const { Schema, model } = require('mongoose');

// const userSchema = new Schema(
//     {
//         fullName: { type: String, required: false },
//         email: { type: String, required: false },
//         password: { type: String, required: false },
//         username: { type: String, required: false },
//         mobile: { type: Number, required: true },
//         productId: [{ type: Object, required: false }],
//         wishList: [{ type: Object, required: false }],
//     },
//     {
//         versionKey: false,
//         timestamps: true,
//     }
// );

// module.exports = model('users', userSchema);