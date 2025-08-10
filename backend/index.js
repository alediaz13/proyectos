// backend/index.js

// 1. Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// 2. Importar dependencias
import express from 'express';
import cors from 'cors';

// 3. Importar conexiones (asegura que las DB se inicien)
import './connections/juventudes.js';
import './connections/servicios.js';

// 4. Importar rutas
import juventudesRoutes from './routes/juventudes/juventudes.routes.js';
import serviciosRoutes from './routes/servicios/servicios.routes.js';

// 5. Crear app
const app = express();

// 6. Middlewares
app.use(cors());
app.use(express.json());

// 7. Usar rutas
app.use('/api/juventudes', juventudesRoutes);
app.use('/api/servicios', serviciosRoutes);

// 8. Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
