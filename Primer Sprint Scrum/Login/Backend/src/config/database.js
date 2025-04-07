// database.js
// Este archivo configura la conexión a la base de datos utilizando Sequelize, un ORM para Node.js.
// La base de datos utilizada es PostgreSQL, y las credenciales se obtienen de las variables de entorno.

// Dependencias requeridas:
// - Sequelize: Biblioteca para interactuar con la base de datos de manera sencilla y estructurada.

/**
 * Configuración de Sequelize
 * 
 * - Nombre de la base de datos: 'Proyecto 1'.
 * - Usuario y contraseña: Se obtienen de las variables de entorno `DB_USER` y `DB_PASSWORD`.
 * - Host: Dirección del servidor de la base de datos, obtenida de `DB_HOST`.
 * - Puerto: Por defecto, 5432 o el valor definido en `DB_PORT`.
 * - Dialecto: PostgreSQL.
 * - logging: Desactivado para evitar mostrar consultas en la consola (puede activarse para depuración).
 * - timestamps: Desactivado para evitar que Sequelize agregue automáticamente campos de tiempo (`createdAt`, `updatedAt`).
 */

const { Sequelize } = require('sequelize');

//Config la conexión a la db
const sequelize = new Sequelize('Proyecto 1', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT || 5432,
  logging: false,
  define: {
    timestamps: false
  }
});

module.exports = sequelize;