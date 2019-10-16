const models = require('../models');

const webtoons = models.webtoons;
const users = models.users;
const favourite = models.favourites;

exports.showAllToon = async (req, res) => {
  const find = await webtoons.findAll();
  res.send(find);
};
exports.findToonTitle = async (req, res) => {
  const title = await webtoons.findOne({where: {title: req.params.title}});
  res.send(title);
};
exports.showFavourite = async (req, res) => {
  const fav = await favourite.findAll({where: {user: req.params.id}});
  res.send(fav);
};

exports.showAllUser = (req, res) => {
  users
    .findAll({where: {id: req.params.id}, attributes: ['name']})
    .then(result => res.send(result));
};
