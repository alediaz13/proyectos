const { serviciosConn } = require('../../config/db');
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
});

module.exports = serviciosConn.model('Servicio', servicioSchema);
