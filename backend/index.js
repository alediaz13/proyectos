import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// 🔗 Nuevas rutas
import serviciosRoutes from "./routes/servicios/servicios.routes.js";
import juventudesRoutes from "./routes/juventudes/juventudes.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Conexión principal (base: proyectos)
mongoose.connect("mongodb+srv://kekovalles:15684414@proyectos.9uctnft.mongodb.net/proyectos?retryWrites=true&w=majority&appName=proyectos")
  .then(() => console.log("✅ Conectado a MongoDB Atlas (base: proyectos)"))
  .catch(err => console.error("❌ Error de conexión:", err));

// 📄 Esquema de la tarea
const TareaSchema = new mongoose.Schema({
  titulo: String,
  completada: Boolean,
});

// 🔗 Modelo que apunta a la colección "TodosLosProyectos"
const Tarea = mongoose.model("Tarea", TareaSchema, "TodosLosProyectos");

// 📡 Endpoints para tareas (base: proyectos)
app.get("/tareas", async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener tareas" });
  }
});

app.post("/tareas", async (req, res) => {
  try {
    const nueva = new Tarea(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: "Error al guardar tarea" });
  }
});

app.put("/tareas/:id", async (req, res) => {
  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log("🔄 Tarea modificada:", tareaActualizada);
    res.json(tareaActualizada);
  } catch (err) {
    console.error("❌ Error al modificar tarea:", err);
    res.status(400).json({ error: "Error al modificar tarea" });
  }
});

app.delete("/tareas/:id", async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
  } catch (err) {
    console.error("❌ Error al eliminar tarea:", err);
    res.status(500).json({ error: "Error al eliminar tarea" });
  }
});

// 🌐 Rutas nuevas
app.use("/servicios", serviciosRoutes);
app.use("/juventudes", juventudesRoutes);

// 🏁 Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor activo ✅ Usá /tareas, /servicios o /juventudes");
});

// 🚀 Inicio del servidor
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Backend corriendo en http://localhost:${port}`);
});
