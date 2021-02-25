const express = require('express')
const categoryRouter = express.Router()
const CategoryController = require('../controllers/categoryController')
const mid = require('../middlewares/session')

categoryRouter.use(mid)

categoryRouter.get('/', CategoryController.showAll)
categoryRouter.get('/:id', CategoryController.showByCategory)
categoryRouter.get('/delete/:id', CategoryController.deleteCategory)

module.exports = categoryRouter