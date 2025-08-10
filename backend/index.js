require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexiones a MongoDB (se ejecutan desde backend/config/db.js)
require('./backend/config/db');

// Rutas
const serviciosRoutes = require('./backend/routes/servicios/servicios.routes');
const juventudesRoutes = require('./backend/routes/juventudes/juventudes.routes');

app.use('/api/servicios', serviciosRoutes);
app.use('/api/juventudes', juventudesRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
