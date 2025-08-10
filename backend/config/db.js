const mongoose = require('mongoose');

const serviciosConn = mongoose.createConnection(process.env.MONGO_URI_SERVICIOS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
serviciosConn.on('connected', () => {
  console.log('✅ Conectado a MongoDB (servicios)');
});
serviciosConn.on('error', err => {
  console.error('❌ Error en conexión a servicios:', err);
});

const juventudesConn = mongoose.createConnection(process.env.MONGO_URI_JUVENTUDES, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
juventudesConn.on('connected', () => {
  console.log('✅ Conectado a MongoDB (juventudes)');
});
juventudesConn.on('error', err => {
  console.error('❌ Error en conexión a juventudes:', err);
});

module.exports = { serviciosConn, juventudesConn };
