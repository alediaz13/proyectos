const { juventudesDB } = require('../../config/db');
const mongoose = require('mongoose');

const juventudSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
});

module.exports = juventudesDB.model('Juventud', juventudSchema);

