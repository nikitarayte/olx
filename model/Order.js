const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    payment: { type: String, required: true },
    //                                                 👇prduct.js
    products: { type: [mongoose.Types.ObjectId], ref: "product", required: true },
    status: { type: String, enum: ["palced", "delivered", "cancel"], default: "palced" },
}, { timestamps: true })
module.exports = mongoose.model("order", orderSchema)



