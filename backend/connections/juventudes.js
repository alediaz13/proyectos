// backend/connections/juventudes.js

import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../config/db.js';

const uri = process.env.MONGO_URI_JUVENTUDES;

if (!uri) {
  throw new Error('❌ La variable MONGO_URI_JUVENTUDES no está definida en el archivo .env');
}

const juventudesConnection = connectDB(uri, 'juventudes');

export default juventudesConnection;
