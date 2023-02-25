'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addConstraint('Profiles', {
        type: 'foreign key',
        fields: ['role_id'],
        name: 'FK_Profiles_Roles',
        references: {
          table: 'Roles',
          field: 'id'
        },
        transaction: t
      })
  
      await queryInterface.addConstraint('Profiles', {
        type: 'foreign key',
        fields: ['country_id'],
        name: 'FK_Profiles_Countries',
        references: {
          table: 'Countries',
          field: 'id'
        },
        transaction: t
      })
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeConstraint('Profiles', 'FK_Profiles_Countries', {
        transaction: t
      })
      await queryInterface.removeConstraint('Profiles', 'FK_Profiles_Roles', {
        transaction: t
      })
    })
  }
}
