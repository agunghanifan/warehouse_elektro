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
    
    return queryInterface.bulkInsert("Admins", [
      {
          username: "agunghanifan",
          password: "agung123",
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          username: "timotius",
          password: "timotius123",
          createdAt:new Date(),
          updatedAt:new Date()
      }
  ], {})

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Admins", null, {})
  }
};
