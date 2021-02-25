const express = require('express')
const router = express.Router()
const LoginControl = require('../controllers/loginControl')
const dashboardRoutes = require('./dashboardRoutes')

router.get("/home", LoginControl.login)
router.post("/home", LoginControl.inputLogin)
router.get("/register", LoginControl.register)
router.post("/register", LoginControl.inputRegister)
router.use("/dashboard", dashboardRoutes)


module.exports = router