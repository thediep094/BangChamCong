const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        fullname: { type: String, required: true },
        date: { type: String },
        username: { type: String, required: true },
        password: { type: String, required: true, min: 8 },
        mail: { type: String, default: "" },
        avatar: { type: String, default: "", required: true },
        phone: { type: String, default: "", required: true },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        gender: { type: String, default: "", required: true },
        salary: { type: Number, required: true, default: 0 },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
