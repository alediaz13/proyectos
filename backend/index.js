import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🌐 Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://kekovalles:15684414@proyectos.9uctnft.mongodb.net/?retryWrites=true&w=majority&appName=proyectos")
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch(err => console.error("Error de conexión:", err));

// 📄 Modelo
const TareaSchema = new mongoose.Schema({
  titulo: String,
  completada: Boolean,
});

const Tarea = mongoose.model("Tarea", TareaSchema);

// 📡 Endpoints
app.get("/tareas", async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});

app.post("/tareas", async (req, res) => {
  const nueva = new Tarea(req.body);
  await nueva.save();
  res.json(nueva);
});

app.listen(3000, () => {
  console.log("Servidor backend corriendo en http://localhost:3000/tareas");
});

app.get("/", (req, res) => {
  res.send("Servidor activo. Usá /tareas para ver las tareas.");
});

