'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dono_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Donos',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.STRING
      },
      castrado: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      datanasc: {
        type: Sequelize.STRING
      },
      raca: {
        type: Sequelize.STRING
      },
      porte: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.STRING
      },
      habmonta: {
        type: Sequelize.STRING
      },
      racao: {
        type: Sequelize.STRING
      },
      quantracao: {
        type: Sequelize.STRING
      },
      vacinado: {
        type: Sequelize.TEXT
      },
      vermifugado: {
        type: Sequelize.TEXT
      },
      alergia: {
        type: Sequelize.TEXT
      },
      doenca: {
        type: Sequelize.TEXT
      },
      medicacao: {
        type: Sequelize.TEXT
      },
      cor:{
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pets');
  }
};