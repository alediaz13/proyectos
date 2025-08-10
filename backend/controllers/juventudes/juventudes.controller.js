export async function obtenerJovenes(req, res, conn) {
  const Juventud = conn.model("Juventud", new conn.base.Schema({
    nombre: String,
    edad: Number,
    intereses: [String]
  }));

  try {
    const datos = await Juventud.find();
    res.json(datos);
  } catch (error) {
    console.error("❌ Error al obtener juventudes:", error);
    res.status(500).json({ error: "Error al obtener juventudes" });
  }
}

export async function agregarJoven(req, res, conn) {
  const Juventud = conn.model("Juventud", new conn.base.Schema({
    nombre: String,
    edad: Number,
    intereses: [String]
  }));

  try {
    const nuevo = new Juventud(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    console.error("❌ Error al agregar joven:", error);
    res.status(500).json({ error: "Error al agregar joven" });
  }
}
