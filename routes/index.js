const express = require('express')
const router = express.Router()
const LoginControl = require('../controllers/loginControl')
const dashboardRoutes = require('./dashboardRoutes')
const mid = require('../middlewares/session')



router.get("/home", LoginControl.login)
router.post("/home", LoginControl.inputLogin)
router.get("/register", mid, LoginControl.register)
router.post("/register", mid, LoginControl.inputRegister)
router.use("/dashboard", dashboardRoutes)


module.exports = router