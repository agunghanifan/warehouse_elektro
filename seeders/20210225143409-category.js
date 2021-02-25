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
    return queryInterface.bulkInsert('Categories',[{
      name:'Smart Phone',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Drones',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Laptop',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Home Appliances',
      createdAt: new Date(),
      updatedAt: new Date(),
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories',null,{})
  }
};
