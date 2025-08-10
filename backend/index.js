// backend/index.js

// 1. Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// 2. Importar dependencias
import express from 'express';
import cors from 'cors';

// 3. Crear app
const app = express();

// 4. Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite leer JSON en req.body

// 5. Importar rutas
import juventudesRoutes from './routes/juventudes/juventudes.routes.js';
import serviciosRoutes from './routes/servicios/servicios.routes.js';

// 6. Usar rutas
app.use('/api/juventudes', juventudesRoutes);
app.use('/api/servicios', serviciosRoutes);

// 7. Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
