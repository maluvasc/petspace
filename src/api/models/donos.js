'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donos.hasMany(models.Pets, {
        foreignKey: 'dono_id'
      })
      Donos.hasOne(models.TutorSecundario, {
        foreignKey: 'dono_id'
      })
    }
  }
  Donos.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    endereco: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Donos',
  });
  return Donos;
};