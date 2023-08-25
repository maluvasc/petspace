//atributos da tabela checkin/checkout no banco de dados

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('checkins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pets',
          key: 'id'
        }
      },
      diachegada: {
        type: Sequelize.DATE
      },
      entrada: {
        type: Sequelize.TIME
      },
      saida: {
        type: Sequelize.TIME
      },
      chegou: {
        type: Sequelize.BOOLEAN
      },
      saiu: {
        type: Sequelize.BOOLEAN
      },
      pago: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('checkins');
  }
};