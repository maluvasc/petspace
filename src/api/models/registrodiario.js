'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegistroDiario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RegistroDiario.belongsTo(models.Pets, {
        foreignKey: 'pet_id'
      })
    }
  }
  RegistroDiario.init({
    alimentacao: DataTypes.TEXT,
    comportamento: DataTypes.TEXT,
    imagem1: DataTypes.TEXT,
    imagem2: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'RegistroDiario',
  });
  return RegistroDiario;
};