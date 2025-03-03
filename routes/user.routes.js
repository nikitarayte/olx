const { addProduct, getProduct, deleteProduct, updateProduct, updateUserInfo } = require("../controller/user.controller")



const router = require("express").Router()
router

    // product CRUD
    .post("/addProduct-user", addProduct)
    .get("/getProduct-user", getProduct)
    .put("/updateProduct-user/:_id", updateProduct)
    .delete("/deleteProduct-user/:_id", deleteProduct)

// .post("/userUpdate-info", updateUserInfo)

module.exports = router