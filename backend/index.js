import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// 🔗 Rutas
import serviciosRoutes from "./routes/servicios/servicios.routes.js";
import juventudesRoutes from "./routes/juventudes/juventudes.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Conexión principal
mongoose.connect("mongodb+srv://kekovalles:15684414@proyectos.9uctnft.mongodb.net/proyectos?retryWrites=true&w=majority&appName=proyectos")
  .then(() => console.log("✅ Conectado a MongoDB Atlas (base: proyectos)"))
  .catch(err => console.error("❌ Error de conexión:", err));

// 🌐 Rutas activas
app.use("/servicios", serviciosRoutes);
app.use("/juventudes", juventudesRoutes);

// 🏁 Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor activo ✅ Usá /servicios o /juventudes");
});

// 🚀 Inicio del servidor
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Backend corriendo en http://localhost:${port}`);
});
