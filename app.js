const express = require('express')
const app = express()
const port = 5000
const session = require('express-session')
    
app.use(express.urlencoded({extended:true}))
    
app.set('view engine', 'ejs')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // saat sudah fix deploy, diganti ke true
}))

const mainRouter = require('./routers/mainRouter')

app.use('/', mainRouter)

app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})