// backend/models/servicios/Servicio.js
const serviciosConnection = require('../../connections/servicios');
const { Schema } = require('mongoose');

const servicioSchema = new Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  activo: Boolean,
});

const Servicio = serviciosConnection.model('Servicio', servicioSchema);

module.exports = Servicio;
