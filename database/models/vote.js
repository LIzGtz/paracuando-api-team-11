'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vote.belongsTo(models.Publication, {
        foreignKey: 'publicationId'
      })

      Vote.belongsTo(models.Profiles, {
        foreignKey: 'profileId'
      })
    }
  }
  Vote.init({
    publicationId: DataTypes.UUID,
    profileId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Vote',
  });
  return Vote;
};