'use strict';
//copy langsung tanpa harus diubah
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand,{foreignKey:'brandId'})
      Product.belongsTo(models.Category,{foreignKey:'categoryId'})
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama tidak boleh kosong"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description tidak boleh kosong"
        },
        len: {
          args: [25, 300],
          msg: "Panjang Description minimal 25 karakter dan maksimal 300 karakter"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Stock tidak boleh kosong"
        }
      }
    },
    harga: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Harga tidak boleh kosong"
        },
        len: {
          args: [5, 15],
          msg: "Nominal harga minimal 10.000 rupiah"
        }
      }
    },
    BrandId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};