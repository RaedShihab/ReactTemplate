const Sequelize = require('sequelize');

const sequelize = new Sequelize('mAd0oFf0rD', 'mAd0oFf0rD', 'V4uMqTV6Ft', {
  host: 'remotemysql.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

  module.exports = sequelize;