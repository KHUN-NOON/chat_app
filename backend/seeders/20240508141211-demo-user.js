'use strict'

var hash = require('../utils/hash')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        password: hash('John1234'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Amy',
        password: hash('Amy1234'),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
