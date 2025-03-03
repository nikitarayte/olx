const asyncHandler = require('express-async-handler')
const Product = require("../model/Product")
const User = require("../model/User")

exports.AdminAllUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
        .select("-createdAt -updatedAt -__v -password")
        .sort({ createdAt: -1 })
    return res.json({ message: "All users fetch success", result })
})

exports.getAdminProduct = async (req, res) => {
    const result = await Product.find()
    res.json({ meassage: "get product success", result })

}