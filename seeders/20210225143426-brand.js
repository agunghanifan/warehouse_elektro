'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */return queryInterface.bulkInsert('Brands',[{
      name:'Samsung',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'DJI',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Asus',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Electrolux',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Apple',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Xiaomi',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Phillip',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name:'Sony',
      createdAt: new Date(),
      updatedAt: new Date(),
    }],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Brands',null,{})
  }
};
