import Servicio from "../../models/servicios/Servicio.js";

export const obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener servicios" });
  }
};
