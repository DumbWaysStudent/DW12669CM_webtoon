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
        title: 'Perfect Half',
        genre: 'Action, Romance',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-Half-cover.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Perfect-half-title-correct.jpg',
        created_by: 1,
      },
      {
        title: 'Solo Leveling',
        genre: 'Action',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Solo-cover_result_result.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Solo-Leveling.jpg',
        created_by: 2,
      },
      {
        title: "Lilith's Cord",
        genre: 'Action, Fantasy, Romance',
        fav_count: 0,
        cover:
          'https://pm1.narvii.com/6423/c1099a7137a521c9685f3475596ca3ef731a715d_hq.jpg',
        image:
          'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2',
        created_by: 1,
      },
      {
        title: "The Devil's Descendants",
        genre: 'Drama, Action, Fantasy',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/DD_result-new.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Devils-Descendants.jpg',
        created_by: 2,
      },
      {
        title: 'Delivery Knight',
        genre: 'Action, Fantasy',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Delivery-knight-cover.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Delivery-Knight-title.jpg',
        created_by: 2,
      },
      {
        title: 'Love Square',
        genre: 'Drama, Romance',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Love-Squer-cover.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Love-square-title.png',
        created_by: 1,
      },
      {
        title: "Yuri's Part Time Job",
        genre: 'Drama, School Life',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/08/Yuris-part-time-job.png',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/07/Yuris-perfect-Married-life.jpg',
        created_by: 1,
      },
      {
        title: 'Raid',
        genre: 'Action, Fantasy',
        fav_count: 0,
        cover:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Raid-Coverc.jpg',
        image:
          'https://getmanhwa.com/wp-content/uploads/2019/09/Raid-Title.jpg',
        created_by: 2,
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
