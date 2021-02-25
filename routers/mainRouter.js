const express = require('express')
const mainRouter = express.Router()
const categoryRouter = require('./categoryRouter')
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const loginRouter = require('./loginRouter')


mainRouter.get('/', (req, res) => {
    res.redirect('/login')
})
mainRouter.use('/login', loginRouter)
mainRouter.use('/categories',categoryRouter)
mainRouter.use('/brands', brandRouter)
mainRouter.use('/products',productRouter)


module.exports = mainRouter