const {Product, Brand, Category} = require("../models")

//product controller diubah namanya
class ProductControl {
    static showProducts(req, res) {
        Product.findAll({
            order: [["id", "ASC"]],
        })
            // include: [{
            //     model: [Category, Brand]
            // }]
            .then((data) => {
                // console.log(data)
                res.render("./product/productList", {data})
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

    static editProductForm (req, res) {
        let id = req.params.id

        Product.findByPk(id,{include:[{
            model:Brand,
            as:'BrandId'
        },{
            model:Category,
            as:'CategoryId'
        }]})
            .then(data => res.send(data))
            .catch(err => console.log(err))



        // res.render("edit", {errors: req.query.errors})
    }

    static editProductData (req, res) {
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


module.exports = ProductControl