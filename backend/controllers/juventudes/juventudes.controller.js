import Juventud from "../../models/juventudes/Juventud.js";

export const obtenerJovenes = async (req, res) => {
  try {
    const jovenes = await Juventud.find();
    res.json(jovenes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener jóvenes" });
  }
};

export const agregarJoven = async (req, res) => {
  try {
    const nuevoJoven = new Juventud(req.body);
    const guardado = await nuevoJoven.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: "Error al agregar joven" });
  }
};
