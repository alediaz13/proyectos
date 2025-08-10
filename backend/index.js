/*require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexiones a MongoDB (se ejecutan desde backend/config/db.js)
require('./config/db');


// Rutas
const serviciosRoutes = require('./routes/servicios/servicios.routes');
const juventudesRoutes = require('./routes/juventudes/juventudes.routes');

app.use('/api/servicios', serviciosRoutes);
app.use('/api/juventudes', juventudesRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
*/
// backend/index.js
// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const juventudesRoutes = require('./routes/juventudes');
const serviciosRoutes = require('./routes/servicios');


app.use('/api/servicios', serviciosRoutes);

app.use('/api/juventudes', juventudesRoutes);


if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(express.json());

// Rutas (ejemplo)
app.get('/', (req, res) => {
  res.send('🚀 API funcionando con múltiples conexiones');
});

// Puerto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
