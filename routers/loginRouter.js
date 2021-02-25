const express = require('express')
const loginRouter = express.Router()
const LoginControl = require('../controllers/loginControl')
const mid = require('../middlewares/session')


loginRouter.get("/", LoginControl.login)
loginRouter.post("/", LoginControl.inputLogin)
loginRouter.get("/register", LoginControl.register)
loginRouter.post("/register", LoginControl.inputRegister)

module.exports = loginRouter