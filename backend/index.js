import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// 🔗 Rutas
import serviciosRoutes from "./routes/servicios/servicios.routes.js";
import createJuventudesRoutes from "./routes/juventudes/juventudes.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Conexión principal (base: proyectos)
mongoose.connect(process.env.MONGO_URI_SERVICIOS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Conectado a MongoDB Atlas (base: proyectos)"))
  .catch(err => console.error("❌ Error de conexión a proyectos:", err));

// ✅ Conexión secundaria (base: juventudesDB)
const juventudesConn = mongoose.createConnection(process.env.MONGO_URI_JUVENTUDES, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
juventudesConn.on("connected", () => {
  console.log("✅ Conectado a MongoDB Atlas (base: juventudesDB)");
});
juventudesConn.on("error", err => {
  console.error("❌ Error de conexión a juventudesDB:", err);
});

// 🌐 Rutas activas
app.use("/servicios", serviciosRoutes);
app.use("/juventudes", createJuventudesRoutes(juventudesConn));

// 🏁 Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor activo ✅ Usá /servicios o /juventudes");
});

// 🚀 Inicio del servidor
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Backend corriendo en puerto ${port}`);
});
