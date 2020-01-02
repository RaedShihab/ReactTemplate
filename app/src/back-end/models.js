const db = require('./db');
const Sequelize = require('sequelize');

const User = db.define('user', {
    // attributes
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING
    }
  }, {
  });

  module.exports = User