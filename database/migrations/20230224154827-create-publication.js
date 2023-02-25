'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publications', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      profileId: {
        type: Sequelize.UUID,
        field: 'profile_id',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      publicationTypeId: {
        type: Sequelize.INTEGER,
        field: 'publication_type_id',
        references: {
          model: 'Publication_Types',
          key: 'id'
        }
      },
      cityId: {
        type: Sequelize.INTEGER,
        field: 'city_id',
        references: {
          model: 'Cities',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING,
        field: 'image_url'
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
    await queryInterface.dropTable('Publications')
  }
}