'use strict';
//masuk tanpa harus diubah
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/hashpass")

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "username harus diisi"
        },
        len: {
          args: [4, 12],
          msg: "Panjang username minimal 4 karakter dan maksimal 12 karakter"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password harus diisi"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Admin',
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password)
        // console.log(instance.password)
      }
    }
  });
  return Admin;
};