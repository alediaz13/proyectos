// backend/connections/servicios.js

import connectDB from '../config/db.js';

const uri = process.env.MONGO_URI_SERVICIOS;

const serviciosConnection = connectDB(uri, 'servicios');

export default serviciosConnection;
