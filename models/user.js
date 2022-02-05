const { Schema, model } = require("mongoose")

const USerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, }
)

const User = model("User", USerSchema);
module.exports = User