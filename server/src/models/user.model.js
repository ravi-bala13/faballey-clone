const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        fullName: { type: String, required: false },
        email: { type: String, required: false },
        password: { type: String, required: false },
        username: { type: String, required: false },
        mobile: { type: Number, required: true },
        productId: { type: Object, required: false },
        wishList: [{ type: Object, required: false }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model('users', userSchema);