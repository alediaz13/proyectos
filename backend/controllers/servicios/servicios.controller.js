import Servicio from "../../models/servicios/Servicio.js";

// Obtener todos los servicios
export const obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener servicios" });
  }
};

// Agregar un nuevo servicio
export const agregarServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    const guardado = await nuevoServicio.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: "Error al agregar servicio" });
  }
};

// Eliminar un servicio por ID
export const eliminarServicio = async (req, res) => {
  try {
    const { id } = req.params;
    await Servicio.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Servicio eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar servicio" });
  }
};

// Modificar un servicio por ID
export const modificarServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const actualizado = await Servicio.findByIdAndUpdate(id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: "Error al modificar servicio" });
  }
};
