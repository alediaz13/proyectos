// backend/connections/juventudes.js
const connectDB = require('../config/db');

const uri = process.env.MONGO_URI_JUVENTUDES;

const juventudesConnection = connectDB(uri, 'juventudes');

module.exports = juventudesConnection;
