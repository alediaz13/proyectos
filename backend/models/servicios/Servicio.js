// models/servicios/Servicio.js
const mongoose = require('mongoose');
const { serviciosDB } = require('../../config/db');

const servicioSchema = new mongoose.Schema({
  // tu esquema acá
});

module.exports = serviciosDB.model('Servicio', servicioSchema);
