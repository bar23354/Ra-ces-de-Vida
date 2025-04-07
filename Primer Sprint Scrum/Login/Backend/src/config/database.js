const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Proyecto 1', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT || 5432,
  logging: false, // Lo pueden activar si quieren hacer consultas a la BD
  define: {
    timestamps: false
  }
});

module.exports = sequelize;