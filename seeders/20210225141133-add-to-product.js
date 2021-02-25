'use strict';
//seeder masuk
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
    
    return queryInterface.bulkInsert("Produks", [
      {
          name: "ROG Phone 3",
          description: "Di dalam bodi ASUS ROG Phone 3 yang berdesain gahar tersemat Snapdragon 865+ dengan RAM dan storage ekstra lega mencapai 12GB dan 512GB.",
          stock: 10,
          price: "9999000",
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          name: "Phantom 4 Pro V2.0",
          description: "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos, the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.",
          stock: 20,
          price: 19999000,
          createdAt:new Date(),
          updatedAt:new Date()
      },
      {
          name: "IPhone 12 Mini",
          description: "The iPhone 12 mini has the fastest processor on any phone, it has the same dual-camera system as the iPhone 12, and most remarkably it has all the components and antennas necessary for both sub-6 and (in the US) mmWave 5G",
          stock: 12,
          price: 12999000,
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
    return queryInterface.bulkDelete("Products", null, {})
  }
};
