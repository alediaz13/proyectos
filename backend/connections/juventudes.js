// backend/connections/juventudes.js

import connectDB from '../config/db.js';

const uri = process.env.MONGO_URI_JUVENTUDES;

const juventudesConnection = connectDB(uri, 'juventudes');

export default juventudesConnection;
