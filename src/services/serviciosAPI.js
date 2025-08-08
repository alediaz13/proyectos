const API_URL = import.meta.env.VITE_API_URL;

export const getServicios = async () => {
  try {
    const res = await fetch(`${API_URL}/servicios`);
    if (!res.ok) throw new Error("Error al obtener servicios");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Error al obtener servicios:", err);
    return [];
  }
};

export const crearServicio = async (nuevo) => {
  try {
    const res = await fetch(`${API_URL}/servicios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    });
    if (!res.ok) throw new Error("Error al crear servicio");
    return await res.json();
  } catch (err) {
    console.error("❌ Error al crear servicio:", err);
    return null;
  }
};

export const eliminarServicio = async (id) => {
  try {
    const res = await fetch(`${API_URL}/servicios/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar servicio");
  } catch (err) {
    console.error("❌ Error al eliminar servicio:", err);
  }
};
