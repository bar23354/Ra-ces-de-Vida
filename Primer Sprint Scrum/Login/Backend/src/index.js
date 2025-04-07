const express = require('express'); // servira como intermediario entre el server y el usuario.
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// variables del entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Asegurar que estemos conectados a la BD
pool.connect()
  .then(() => console.log('Conexión a PostgreSQL exitos!!!'))
  .catch((err) => console.error('Error al conectar con PostgreSQL:', err));

// Ruta base
app.get('/', (req, res) => {
  res.send('Bienvenido al backend de Raices de Vida');
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); //aca debemos ver que colocamos jeeje
});

module.exports = { app, pool };
