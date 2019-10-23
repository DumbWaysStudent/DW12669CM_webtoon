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
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-half-title-correct.jpg',
        webtoon: 1,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Solo-Leveling.jpg',
        webtoon: 2,
      },
      {
        title: 'EP 1',
        image:
          'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2',
        webtoon: 3,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Devils-Descendants.jpg',
        webtoon: 4,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-half-title-correct.jpg',
        webtoon: 5,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Delivery-Knight-title.jpg',
        webtoon: 6,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Love-square-title.png',
        webtoon: 7,
      },
      {
        title: 'EP 1',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Yuris-perfect-Married-life.jpg',
        webtoon: 8,
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
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
