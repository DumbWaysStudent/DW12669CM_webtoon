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
        page: 1,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/001.jpg',
        episode: 1,
      },
      {
        page: 2,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/002.jpg',
        episode: 1,
      },
      {
        page: 3,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/003.jpg',
        episode: 1,
      },
      {
        page: 4,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/004.jpg',
        episode: 1,
      },
      {
        page: 5,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/005.jpg',
        episode: 1,
      },
      {
        page: 6,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/006.jpg',
        episode: 1,
      },
      {
        page: 7,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/007.jpg',
        episode: 1,
      },
      {
        page: 8,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/009.jpg',
        episode: 1,
      },
      {
        page: 9,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/010.jpg',
        episode: 1,
      },
      {
        page: 10,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/011.jpg',
        episode: 1,
      },
      {
        page: 11,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/012.jpg',
        episode: 1,
      },
      {
        page: 12,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/013.jpg',
        episode: 1,
      },
      {
        page: 13,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/014.jpg',
        episode: 1,
      },
      {
        page: 14,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/015.jpg',
        episode: 1,
      },
      {
        page: 15,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/016.jpg',
        episode: 1,
      },
      {
        page: 16,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/017.jpg',
        episode: 1,
      },
      {
        page: 17,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/018.jpg',
        episode: 1,
      },
      {
        page: 18,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/019.jpg',
        episode: 1,
      },
      {
        page: 19,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/020.jpg',
        episode: 1,
      },
      {
        page: 20,
        image:
          'https://getmanhwa.co/wp-content/uploads/WP-manga/data/manga_5d66c58d9eced/e75c3fa04e29249d7ebdc14d90fa2c69/021.jpg',
        episode: 1,
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
