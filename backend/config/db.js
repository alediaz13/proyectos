// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async (uri, nombre) => {
  if (!uri || !uri.startsWith('mongodb')) {
    throw new Error(`❌ URI inválida para ${nombre}: ${uri}`);
  }

  try {
    const conn = await mongoose.createConnection(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Conectado a MongoDB (${nombre})`);
    return conn;
  } catch (error) {
    console.error(`❌ Error al conectar a ${nombre}:`, error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
