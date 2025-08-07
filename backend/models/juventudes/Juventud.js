import juventudesConn from "../../config/juventudesConn.js";
import mongoose from "mongoose";

const juventudSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: Number,
  intereses: [String],
  activo: { type: Boolean, default: true },
  // Agregá los campos que necesites
});

const Juventud = juventudesConn.model("Juventud", juventudSchema);

export default Juventud;
