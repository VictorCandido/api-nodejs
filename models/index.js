const Sequelize = require('sequelize');

const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});

const userModel = require('../models/user.model');

module.exports = {
    Sequelize,
    sequelize,
    usuario: userModel(sequelize, Sequelize)
}