const Juventud = require('../../models/juventudes/Juventud.js');

const obtenerJuventudes = async (req, res) => {
  try {
    const juventudes = await Juventud.find();
    res.json(juventudes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener juventudes' });
  }
};

const crearJuventud = async (req, res) => {
  try {
    const nuevaJuventud = new Juventud(req.body);
    await nuevaJuventud.save();
    res.status(201).json(nuevaJuventud);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear juventud' });
  }
};

const actualizarJuventud = async (req, res) => {
  try {
    const juventudActualizada = await Juventud.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(juventudActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar juventud' });
  }
};

const eliminarJuventud = async (req, res) => {
  try {
    await Juventud.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Juventud eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar juventud' });
  }
};

module.exports = {
  obtenerJuventudes,
  crearJuventud,
  actualizarJuventud,
  eliminarJuventud,
};
