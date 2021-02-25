'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('BrandCategories',[{
     brandId:1,
     categoryId:2,
     createdAt:new Date(),
     updatedAt:new Date()
   },{
    brandId:3,
    categoryId:1,
    createdAt:new Date(),
    updatedAt:new Date()
  },{
    brandId:1,
    categoryId:3,
    createdAt:new Date(),
    updatedAt:new Date()
  },{
    brandId:1,
    categoryId:4,
    createdAt:new Date(),
    updatedAt:new Date()
  },{
    brandId:1,
    categoryId:3,
    createdAt:new Date(),
    updatedAt:new Date()
  },{
    brandId:1,
    categoryId:2,
    createdAt:new Date(),
    updatedAt:new Date()
  },{
    brandId:1,
    categoryId:1,
    createdAt:new Date(),
    updatedAt:new Date()
  }],{})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('BrandCategories',null,{})
  }
};
