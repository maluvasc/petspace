// Criação do modelo de Pets
// Pets tem um dono, mas donos tem varios pets
// Pets tem varios checkins, mas checkins só tem um pet
// Pets tem varios registros diarios, mas registros diarios só tem um pet

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasMany(models.checkin, {
        foreignKey: 'pet_id'
      })
      Pets.hasMany(models.RegistroDiario, {
        foreignKey: 'pet_id'
      })
      Pets.belongsTo(models.Donos, {
        foreignKey: 'dono_id'
      })
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    idade: DataTypes.STRING,
    castrado: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    datanasc: DataTypes.STRING,
    raca: DataTypes.STRING,
    porte: DataTypes.STRING,
    peso: DataTypes.STRING,
    habmonta: DataTypes.STRING,
    racao: DataTypes.STRING,
    quantracao: DataTypes.STRING,
    vacinado: DataTypes.TEXT,
    vermifugado: DataTypes.TEXT,
    alergia: DataTypes.TEXT,
    doenca: DataTypes.TEXT,
    medicacao: DataTypes.TEXT,
    cor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};