const express = require('express')
const productRouter = express.Router()
const ProductControl = require('../controllers/productController')

//ubah controller ini jadi product
//router dikasih nama untuk spesifikasi

productRouter.get("/", ProductControl.showProducts)
productRouter.get("/:id/minus", ProductControl.minusStock)

productRouter.get("/:id/plus", ProductControl.plusStock)

// productRouter.get("/add/:id", ProductControl.addProductForm)
// productRouter.post("/add/:id", ProductControl.addProductData)

// //ini buat masuk ke form belom dibikin
productRouter.get("/:id/edit", ProductControl.editProductForm)
// //ini buat input data belom dibikin
// productRouter.post("/:id/edit", ProductControl.editProductData)

// productRouter.get("/delete/:id", ProductControl.deleteProduct)


module.exports = productRouter