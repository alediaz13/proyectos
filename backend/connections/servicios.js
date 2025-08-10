// backend/connections/servicios.js

import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../config/db.js';

const uri = process.env.MONGO_URI_SERVICIOS;

if (!uri) {
  throw new Error('❌ La variable MONGO_URI_SERVICIOS no está definida en el archivo .env');
}

const serviciosConnection = connectDB(uri, 'servicios');

export default serviciosConnection;
