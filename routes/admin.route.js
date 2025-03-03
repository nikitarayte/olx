const { getAdminProduct, AdminAllUsers } = require("../controller/admin.controller")


const router = require("express").Router()
router
    .get("/allUsers-admin", AdminAllUsers)
    .get("/getProduct-admin", getAdminProduct)



module.exports = router