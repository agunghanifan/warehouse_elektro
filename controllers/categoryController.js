const {Brand, Category} = require('../models/index')

class CategoryController {
    static showAll(req,res){
        Category.findAll({include:Brand})
            .then(data => res.render('./category/categoryList',{data}))
            .catch(err => res.send(err))
    }
    static showByCategory(req,res){
        let idInput = req.params.id
        Category.findByPk(idInput,{include:Brand})
            .then(data => res.render('category/categoryPersonal',{data}) )
            .catch(err => console.log(err))
    }

    static addCategoryForm(req,res){
        res.render('./category/addCategory')
    }
    static addCategoryData(req,res){
        let data = +req.body
        Category.create(data)
            .then(data => res.redirect('/categories'))
            .catch(err => console.log(err))
    }

    static deleteCategory(req,res){
        let idInput = +req.params.id
        Category.destroy({where:{
            id:idInput
        }})
            .then(data => res.redirect('/categories'))
            .catch(err => res.send(err))
    }
}

module.exports = CategoryController