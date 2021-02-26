const express = require('express')
const categoryRouter = express.Router()
const CategoryController = require('../controllers/categoryController')


categoryRouter.get('/', CategoryController.showAll)
categoryRouter.get('/:id', CategoryController.showByCategory)
categoryRouter.get('/add', CategoryController.addCategoryForm)
categoryRouter.post('/add', CategoryController.addCategoryData)
categoryRouter.get('/delete/:id', CategoryController.deleteCategory)

module.exports = categoryRouter