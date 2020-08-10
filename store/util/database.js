const Sequelize = require('sequelize');

const sequelize = new Sequelize('complete', 'root', 'passcode', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
