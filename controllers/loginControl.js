const {Admin, Product} = require("../models")
const {isMatch, hashPassword} = require("../helpers/hashpass")

class LoginControl {
    static login(req, res) {
        res.render("login", {errors: req.query.errors})
    }

    static inputLogin(req, res) {
        // console.log(req.body.username)
        // console.log(req.body.password)
        const username = req.body.username
        const password = req.body.password
        Admin.findOne({
            where: {
                username: username
            }
        })
            .then(data => {
                // console.log(data)
                const isMatchPassword = isMatch(password, data.password)
                // console.log(isMatchPassword)
                if(isMatchPassword) {
                     res.redirect("/dashboard")
                }
            })
            .catch(err => {
                res.redirect("/home?errors=Invalid username / password")
                // res.send(err)
                // let errors = []
                // err.errors.forEach(error => {
                //     errors.push(error.message)
                // })
                // res.redirect(`/?errors=${errors}`)
            })
    }

    static register(req, res) {
        res.render("register", {errors: req.query.errors})
    }

    static inputRegister(req, res) {
        // console.log(req.body)
        const newPassword = {
            username: req.body.username,
            password: req.body.password
        }
        console.log(newPassword)
        Admin.create(newPassword)
            .then((data) => {
                res.redirect("/home")
            })
            .catch((err) => {
                res.redirect("/register?errors=Invalid username / password")
                // res.send(err)
                // let errors = []
                // err.errors.forEach(error => {
                //     errors.push(error.message)
                // })
                // res.redirect(`/register?errors=${errors}`)
            })
    }

}

module.exports = LoginControl