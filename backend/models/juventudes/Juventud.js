// backend/models/juventudes/Juventud.js
const juventudesConnection = require('../../connections/juventudes');
const { Schema } = require('mongoose');

const juventudSchema = new Schema({
  nombre: String,
  edad: Number,
  intereses: [String],
  activo: Boolean,
});

const Juventud = juventudesConnection.model('Juventud', juventudSchema);

module.exports = Juventud;
