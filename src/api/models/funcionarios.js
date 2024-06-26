//modelo de funcionarios

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionarios',
    defaultScope: {
      attributes: { exclude: ['senha'] },
    },
  });
  return Funcionarios;
};