const express = require('express');
const session = require("express-session")
const app = express();
const port = 3001
const router = require('./routes')
app.use(express.urlencoded({ extended: true}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // saat sudah fix deploy, diganti ke true
}))
app.use(router)
app.set("view engine", "ejs")



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/home`)
})