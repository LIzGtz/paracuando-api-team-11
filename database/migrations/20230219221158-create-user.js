'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        field: 'last_name',
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      userName: {
        field: 'user_name',
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      emailVerified: {
        field: 'email_verified',
        type: Sequelize.BOOLEAN
      },
      token: {
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
};