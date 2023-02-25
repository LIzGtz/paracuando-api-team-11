'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        },
        field: 'user_id'
      },
      roleId: {
        type: Sequelize.INTEGER,
        field: 'role_id'
      },
      countryId: {
        type: Sequelize.INTEGER,
        field:'country_id'
      },
      imageUrl: {
        type: Sequelize.STRING,
        field: 'image_url'
      },
      codePhone: {
        type: Sequelize.STRING,
        field: 'code_phone'
      },
      phone: {
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
    })

    // La siguiente no se aplica por que marca un error "no existe la relación 'Profiles'"
    // eso se debe a que la tabla "Profiles" aún no existe como tal en la base de datos (se 
    // tiene que hacer commit a la transacción para que se cree la tabla primero, pero eso nos
    // puede dejar en un estado inválido)
    // await queryInterface.addConstraint('Profiles', {
    //   name: 'FK_Profiles_Users',
    //   fields: ['user_id'],
    //   type: 'foreign key',
    //   references: {
    //     table: 'Users',
    //     field: 'id'
    //   }
    // }, {
    //   transaction: transaction
    // })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles')
  }
}