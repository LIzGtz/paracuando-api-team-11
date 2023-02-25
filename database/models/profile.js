'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })

      Profile.belongsTo(models.Country, {
        foreignKey: 'countryId'
      })

      Profile.hasMany(models.Publication, {
        foreignKey: 'stateId'
      })

      Profile.belongsTo(models.Role, {
        foreignKey: 'profileId'
      })

      Profile.hasMany(models.Vote, {
        foreignKey: 'profileId'
      })
    }
  }
  Profile.init({
    userId: DataTypes.BIGINT,
    roleId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    codePhone: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};