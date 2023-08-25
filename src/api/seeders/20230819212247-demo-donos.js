//é um arquivo que cria um usuário no banco de dados, ele é usado para testar se o banco de dados está funcionando
//não utilizamos o bulk insert que seria a inserção de vários usuários de uma vez

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false    
      }], {})
  },

  async down (queryInterface, Sequelize) {
      Example:
      await queryInterface.bulkDelete('People', null, {});
  }
};
