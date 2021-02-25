const {Product, Admin} = require("../models")

class DasboardControl {
    static showProducts(req, res) {
        Product.findAll({
            order: [["id", "ASC"]],
        })
            // include: [{
            //     model: [Category, Brand]
            // }]
            .then((data) => {
                // console.log(data)
                res.render("dashboard", {data, errors: req.query.errors})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static plusStock (req, res) {
        // console.log(req.params.id)
        let idSearch = Number(req.params.id)
        Product.findByPk(idSearch)
            .then(data => {
                data.stock = data.stock + 1
                const dataUpdate = {
                    stock: data.stock,
                }
                return Product.update(dataUpdate, {
                    where: {
                        id: idSearch
                    }
                })
            })
            .then (data => {
                res.redirect("/dashboard")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static minusStock (req, res) {
        let idSearch = Number(req.params.id)
        Product.findByPk(idSearch)
            .then(data => {
                data.stock = data.stock - 1
                const dataUpdate = {
                    stock: data.stock,
                }
                return Product.update(dataUpdate, {
                    where: {
                        id: idSearch
                    }
                })
            })
            .then (data => {
                res.redirect("/dashboard")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editProduct (req, res) {
        res.render("edit", {errors: req.query.errors})
    }

    static inputEditProduct (req, res) {
        // let idSearch = Number(req.params.id)
        // let dataedit
        // Product.findByPk(idSearch)
        //     .then(data => {
        //         dataedit = data
        //         // return ProductionHouse.findAll()
        //     })
        //     .then(houses => {
        //         res.render("formsEditMovie", {data: dataedit, errors:req.query.errors})
        //     })
        //     .catch(err => {
        //         res.send(err)
        //     })
    }


}


module.exports = DasboardControl