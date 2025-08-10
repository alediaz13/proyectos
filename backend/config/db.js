// config/db.js
const mongoose = require('mongoose');

const serviciosDB = mongoose.createConnection(process.env.MONGO_URI_SERVICIOS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const juventudesDB = mongoose.createConnection(process.env.MONGO_URI_JUVENTUDES, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { serviciosDB, juventudesDB };
