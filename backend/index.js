// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const juventudesRoutes = require('./routes/juventudes/juventudes.routes');
const serviciosRoutes = require('./routes/servicios/servicios.routes');

const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(express.json());
app.use(cors()); // ✅ Habilita CORS para el frontend

// 🔗 Activar rutas
app.use('/api/servicios', serviciosRoutes);
app.use('/api/juventudes', juventudesRoutes);

// 🔍 Endpoint de prueba
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', mensaje: '✅ Backend activo y respondiendo' });
});

// 🛠️ Ruta base
app.get('/', (req, res) => {
  res.send('🚀 API funcionando con múltiples conexiones');
});

// 🔊 Puerto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
