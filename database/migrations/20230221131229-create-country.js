'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable('Countries', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
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
      }, {
        transaction: transaction
      })

      // await queryInterface.addConstraint('Profiles', {
      //   name: 'FK_Profiles_Country',
      //   fields: ['country_id'],
      //   type: 'foreign key',
      //   references: {
      //     table: 'Countries',
      //     field: 'id'
      //   }
      // }, {
      //   transaction: transaction
      // })
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // await queryInterface.removeConstraint('Profiles', 'FK_Profiles_Country', {
      //   transaction: transaction
      // })
      await queryInterface.dropTable('Countries', {
        transaction: transaction
      })
    })
  }
}