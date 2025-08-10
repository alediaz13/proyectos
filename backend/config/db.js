// backend/config/db.js

import mongoose from 'mongoose';

const connectDB = (uri, nombre) => {
  if (!uri || !uri.startsWith('mongodb')) {
     throw new Error(`❌ URI inválida para ${nombre}: ${uri}`);
   }

   // Ya no se necesitan las opciones obsoletas
   const conn = mongoose.createConnection(uri);

   conn.on('connected', () => {
     console.log(`✅ Conectado a MongoDB (${nombre})`);
   });

   conn.on('error', (err) => {
    console.error(`❌ Error en conexión (${nombre}):`, err.message);
   });

   return conn;
};

export default connectDB;