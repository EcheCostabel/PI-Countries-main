const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  /*
  le inyectamos el sequelize
  */
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    precio:{
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });
};