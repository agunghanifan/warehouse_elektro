const {Produk, Brand, Category} = require("../models/index")

//product controller diubah namanya
class ProductControl {
    static showProducts(req, res) {
        Produk.findAll({
            order: [["id", "ASC"]],
            include:[{
                model:Category
            },{
                model:Brand
            }]
        })
            .then((data) => {
                res.render("./product/productList", {data})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static plusStock (req, res) {
        let idSearch = Number(req.params.id)
        Produk.findByPk(idSearch)
            .then(data => {
                data.stock = data.stock + 1
                const dataUpdate = {
                    stock: data.stock,
                }
                return Produk.update(dataUpdate, {
                    where: {
                        id: idSearch
                    }
                })
            })
            .then (data => {
                res.redirect("/products")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static minusStock (req, res) {
        let idSearch = Number(req.params.id)
        Produk.findByPk(idSearch)
            .then(data => {
                data.stock = data.stock - 1
                const dataUpdate = {
                    stock: data.stock,
                }
                return Produk.update(dataUpdate, {
                    where: {
                        id: idSearch
                    }
                })
            })
            .then (data => {
                res.redirect("/products")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addProductForm(req,res){
        res.render('./product/addProduct')
    }
    static addProductData(req,res){

        Produk.create({name:req.body.name,
            description:req.body.description,
            stock:req.body.stock,
            price:+req.body.price,
            brandId:+req.body.brandId,
            categoryId:+req.body.categoryId})
            .then(data => res.redirect('/products'))
            .catch(err => console.log(err))
    }

    static editProductForm (req, res) {
        let id = req.params.id

        Produk.findByPk(id,{include:[{
            model:Brand 
        },{
            model:Category
        }]})
            .then(data => res.render('./product/editProduct',{data}))
            .catch(err => console.log(err))

    }

    static editProductData (req, res) {
        let idSearch = Number(req.params.id)
        let dataedit

        Produk.update({name:req.body.name,
            description:req.body.description,
            stock:req.body.stock,
            price:+req.body.price,
            brandId:+req.body.brandId,
            categoryId:+req.body.categoryId},{where:{id:idSearch}})

                .then(data => res.redirect('/products'))
                .catch(er => console.log(err))
    }

    static deleteProduct(req,res){
        Produk.destroy({where:{id:+req.params.id}})
            .then(data => res.redirect('/products'))
            .catch(err => console.log(err))
    }


}


module.exports = ProductControl