const express = require('express');
const app = express();
const port = process.env.PORT || 3001
const router = require('./routes')
app.use(express.urlencoded({ extended: true}))
app.use(router)
app.set("view engine", "ejs")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})