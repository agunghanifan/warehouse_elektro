const express = require('express')
const brandRouter = express.Router()
const BrandController = require('../controllers/brandController')

brandRouter.get('/', BrandController.showAll)
brandRouter.get('/:id', BrandController.showByBrand)
brandRouter.get('/delete/:id', BrandController.deleteBrand)

module.exports = brandRouter