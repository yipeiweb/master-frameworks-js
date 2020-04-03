'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var taskRoutes = require('./routes/task');

// Middlewares 
let middleware = require('./configs/middleware');
middleware(app);

// CORS
let cors = require('./configs/cors');
cors(app);

// Añadir prefijos a rutas / Cargar rutas
app.use('/api', taskRoutes);

// Exportar modulo (fichero actual)
module.exports = app;