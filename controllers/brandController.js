const {Brand, Category} = require('../models/index')
// 
class BrandController {
    static showAll(req,res){
        Brand.findAll({include:Category})
            .then(data => res.render('./brand/brandList',{data}))
            .catch(err => res.send(err))
    }
    static showByBrand(req,res){
        let idInput = req.params.id
        Brand.findByPk(idInput,{include:Category})
            .then(data => res.render('brand/brandPersonal',{data}) )
            .catch(err => console.log(err))
    }

    static deleteBrand(req,res){
        let idInput = +req.params.id
        Brand.destroy({where:{
            id:idInput
        }})
            .then(data => res.redirect('/brands'))
            .catch(err => res.send(err))
    }
}

module.exports = BrandController