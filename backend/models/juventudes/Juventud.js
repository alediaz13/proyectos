const { juventudesConn } = require('../../config/db');
const mongoose = require('mongoose');

const juventudSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
});

module.exports = juventudesConn.model('Juventud', juventudSchema);
