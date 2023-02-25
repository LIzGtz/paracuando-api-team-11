'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Votes', {
      
      publicationId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        field:'publication_id',
        references: {
          model: 'Publications',
          key: 'id'
        }
      },
      profileId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        field: 'profile_id',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Votes')
  }
}