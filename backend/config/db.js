// backend/config/db.js

import mongoose from 'mongoose';

const connectDB = (uri, nombre) => {
  if (!uri || !uri.startsWith('mongodb')) {
    throw new Error(`❌ URI inválida para ${nombre}: ${uri}`);
  }

  const conn = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  conn.on('connected', () => {
    console.log(`✅ Conectado a MongoDB (${nombre})`);
  });

  conn.on('error', (err) => {
    console.error(`❌ Error en conexión (${nombre}):`, err.message);
  });

  return conn;
};

export default connectDB;
