import serviciosConn from "../../config/serviciosConn.js"; // ✅ correcta
import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  categoria: String,
  activo: { type: Boolean, default: true },
  // Agregá los campos que necesites
});

const Servicio = serviciosConn.model("Servicio", servicioSchema);

export default Servicio;
