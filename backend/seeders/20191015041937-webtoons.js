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
    return queryInterface.bulkInsert('webtoons', [
      {
        title: '동네 누나',
        genre: 'Romance',
        fav_count: 100,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        created_by: 1,
      },
      {
        title: '유리의 알으바이트',
        genre: 'Romance',
        fav_count: 100,
        image:
          'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
        created_by: 1,
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
    return queryInterface.bulkDelete('webtoons', null, {});
  },
};
