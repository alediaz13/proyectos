// backend/models/servicios/Servicio.js

import serviciosConnection from '../../connections/servicios.js';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const servicioSchema = new Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  activo: Boolean,
});

const Servicio = serviciosConnection.model('Servicio', servicioSchema);

export default Servicio;
