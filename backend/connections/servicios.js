// backend/connections/servicios.js
const connectDB = require('../config/db');

const uri = process.env.MONGO_URI_SERVICIOS;

const serviciosConnection = connectDB(uri, 'servicios');

module.exports = serviciosConnection;
