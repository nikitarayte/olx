const Product = require("../model/Product")

exports.getPublicProducts = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product fetch success", result })
}
exports.getPublicProductDetails = async (req, res) => {
    const pId = req.params.productId
    if (!pId) {
        return res.status(400).json({ message: "id not found" })
    }
    const result = await Product.findById(req.params.productId)
    res.json({ meassage: "get product detail success", result })

}


