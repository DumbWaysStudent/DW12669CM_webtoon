'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define(
    'webtoons',
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      fav_count: DataTypes.INTEGER,
      image: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
    },
    {},
  );
  webtoon.associate = function(models) {
    // associations can be defined here
  };
  return webtoon;
};
