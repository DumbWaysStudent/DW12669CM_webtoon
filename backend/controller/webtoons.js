const models = require('../models');

const webtoons = models.webtoons;
const users = models.users;

exports.showAllToon = (req, res) => {
  webtoons.findAll().then(result => res.send(result));
};

exports.showAllUser = (req, res) => {
  users
    .findAll({where: {id: req.params.id}, attributes: ['name']})
    .then(result => res.send(result));
};
