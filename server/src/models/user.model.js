const registrationSchema = new mongoose.Schema(
    {
        full_Name: {
            type: number,
            trim: true,
            minlength: 10
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        cartItems: [{ type: Object, required: false }],
        wishList: [{ type: Object, required: false }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", registrationSchema);