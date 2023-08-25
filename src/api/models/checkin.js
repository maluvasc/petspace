//retorna checkin para ser usado para procurar nos controllers dos crud por ex. em database.nomedatabela.funcao 
//todos os modelos funcionam da forma acima
//também declara os relacionamentos entre as tabelas
//decidimos fazer a tabela checkin para que o pet possa ter mais de um checkin, e para que o checkin possa referenciar apenas um pet

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      checkin.belongsTo(models.Pets, {
        foreignKey: 'pet_id'
      })
    }
  }
  checkin.init({
    diachegada: DataTypes.DATE,
    entrada: DataTypes.TIME,
    saida: DataTypes.TIME,
    chegou: DataTypes.BOOLEAN,
    saiu: DataTypes.BOOLEAN,
    pago: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'checkin',
  });
  return checkin;
};