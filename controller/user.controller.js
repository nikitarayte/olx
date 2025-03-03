const asyncHandler = require("express-async-handler")
const cloud = require("./../utils/cloudinary")


// Product crud
const { upload } = require("../utils/upload")
const path = require("path")
const Product = require("../model/Product")
const User = require("../model/User")
const { checkEmpty } = require("../utils/checkEmpty")



exports.addProduct = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            // console.log(err)
            return res.status(400).json({ message: "unable to upload", err })
        }

        if (req.files) {
            const allImages = []
            const heros = []
            for (const item of req.files) {    //loop mein kabhi bhi promises ka code nhi likhte isliye allImages ka empty array ka variable banaya
                allImages.push(cloud.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url)
            }
            //promise all end

            const result = await Product.create({ ...req.body, productImg: heros })
            res.json({ meassage: "add Product success" })
        } else {
            res.status(400).json({ message: "Product img is required", result })
        }

    })
}

exports.getProduct = async (req, res) => {
    const result = await Product.find()
    res.json({ meassage: "get Product success", result })

}

exports.updateProduct = async (req, res) => {
    upload(req, res, async err => {
        try {
            const allImages = []
            if (req.files && req.files.length > 0) {
                // upload new image
                for (const item of req.files) {
                    const { secure_url } = await cloud.uploader.upload(item.path)
                    allImages.push(secure_url)
                }
            }
            const oldProduct = await Product.findById(req.params._id)
            if (req.body.remove) {
                // remove image
                const result = oldProduct.productImg.filter(item => !req.body.remove.includes(item))
                oldProduct.productImg = result
                if (typeof req.body.remove === 'string') {  //req.body.remove mein string aaya to ye code run hoga (single image to remove)
                    await cloud.uploader.destroy(path.basename(req.body.remove, path.extname(req.body.remove)))
                } else { //req.body.remove mein array aya to ye code run hoga (multiple image to remove)
                    for (const item of req.body.remove) {
                        await cloud.uploader.destroy(path.basename(item, path.extname(item)))
                    }
                }
            }
            // change only data
            await Product.findByIdAndUpdate(req.params._id, { ...req.body, productImg: [...oldProduct.productImg, ...allImages] })
            res.json({ meassage: "update Product success" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "something went wrong" })
        }
    })

}

exports.deleteProduct = async (req, res) => {
    const result = await Product.findById(req.params._id)
    //  delete from cloudianry
    for (const item of result.productImg) {
        await cloud.uploader.destroy(path.basename(item, path.extname(item)))  //path.extname(item) ==> removes extension of the item
    }
    //  delete from database
    await Product.findByIdAndDelete(req.params._id)
    res.json({ meassage: "delete Product success" })
}





exports.adminBlockUnblockUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive })
        res.json({ message: "Account block success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}


exports.getUserProducts = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product fetch success", result })
}

// exports.updateUserInfo = asyncHandler(async (req, res) => {
//     const { address, city, gender } = req.body
//     const { isError, error } = checkEmpty({ address, city, gender })
//     if (isError) {
//         return res.status(400).json({ message: "all fields required", error })
//     }

//     const result = await User.findByIdAndUpdate(req.user, {
//         address,
//         city,
//         gender,
//         infoComplete: true
//     }, { new: true })

//     res.json({ message: "profile update sucess", result })
//     // setLoc(data.results[0].formatted);
// })