'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define(
    'favourites',
    {
      user: DataTypes.INTEGER,
      webtoon: DataTypes.INTEGER,
    },
    {},
  );
  favourite.associate = function(models) {
    // associations can be defined here
    favourite.belongsTo(models.users, {
      as: 'user_id',
      foreignKey: 'user',
    });
    favourite.belongsTo(models.webtoons, {
      as: 'webtoon_id',
      foreignKey: 'webtoon',
    });
  };
  return favourite;
};
