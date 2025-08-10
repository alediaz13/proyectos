const Servicio = require('../../models/servicios/servicio.js');

const obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
};

const crearServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    await nuevoServicio.save();
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear servicio' });
  }
};

const actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(servicioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar servicio' });
  }
};

const eliminarServicio = async (req, res) => {
  try {
    await Servicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Servicio eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar servicio' });
  }
};

module.exports = {
  obtenerServicios,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
};
