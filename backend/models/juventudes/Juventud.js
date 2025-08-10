// backend/models/juventudes/Juventud.js

import juventudesConnection from '../../connections/juventudes.js';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const juventudSchema = new Schema({
  nombre: String,
  edad: Number,
  intereses: [String],
  activo: Boolean,
});

const Juventud = juventudesConnection.model('Juventud', juventudSchema);

export default Juventud;
