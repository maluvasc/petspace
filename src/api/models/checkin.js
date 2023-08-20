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