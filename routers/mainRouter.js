const express = require('express')
const mainRouter = express.Router()
const categoryRouter = require('./categoryRouter')
const brandRouter = require('./brandRouter')

mainRouter.get('/', (req,res) => {
    res.render('landing')
})
mainRouter.use('/categories',categoryRouter)
mainRouter.use('/brands', brandRouter)


module.exports = mainRouter