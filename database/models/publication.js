'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publication.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })

      Publication.belongsTo(models.Publication_Type, {
        foreignKey: 'publicationTypeId'
      })

      Publication.belongsTo(models.City, {
        foreignKey: 'publicationId'
      })

      Publication.hasMany(models.Vote, {
        foreignKey: 'publicationId'
      })

    }
  }
  Publication.init({
    id: DataTypes.UUID,
    profileId: DataTypes.UUID,
    publicationTypeId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING,
    picture: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publication',
  });
  return Publication;
};