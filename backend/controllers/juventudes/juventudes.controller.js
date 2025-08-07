import Juventud from "../../models/juventudes/Juventud.js";

export const obtenerJovenes = async (req, res) => {
  try {
    const jovenes = await Juventud.find();
    res.json(jovenes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener jóvenes" });
  }
};
