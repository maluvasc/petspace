'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TutorSecundario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TutorSecundario.belongsTo(models.Donos, {
        foreignKey: 'dono_id'
      })
    }
  }
  TutorSecundario.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TutorSecundario',
  });
  return TutorSecundario;
};