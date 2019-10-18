'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('images', [
      {
        page: 3,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        episode: 1,
      },
      {
        page: 3,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        episode: 2,
      },
      {
        page: 4,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        episode: 1,
      },
      {
        page: 4,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        episode: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('images', null, {});
  },
};
