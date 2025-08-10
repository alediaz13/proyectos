// src/services/juventudesAPI.js

const API_URL = import.meta.env.VITE_API_URL || "https://proyectos-1-9amg.onrender.com";
console.log("🌐 API_URL (juventudesAPI):", API_URL);

export const getJuventudes = async () => {
  try {
    const res = await fetch(`${API_URL}/juventudes`);
    if (!res.ok) throw new Error("Error al obtener juventudes");
    return await res.json();
  } catch (err) {
    console.error("❌ Error al obtener juventudes:", err.message);
    return [];
  }
};

export const crearJuventud = async (nuevo) => {
  try {
    const res = await fetch(`${API_URL}/juventudes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    });
    if (!res.ok) throw new Error("Error al crear juventud");
    return await res.json();
  } catch (err) {
    console.error("❌ Error al crear juventud:", err.message);
    return null;
  }
};

export const eliminarJuventud = async (id) => {
  try {
    const res = await fetch(`${API_URL}/juventudes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar juventud");
  } catch (err) {
    console.error("❌ Error al eliminar juventud:", err.message);
  }
};

export const modificarJuventud = async (id, datosActualizados) => {
  try {
    const res = await fetch(`${API_URL}/juventudes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosActualizados),
    });
    if (!res.ok) throw new Error("Error al modificar juventud");
    return await res.json();
  } catch (err) {
    console.error("❌ Error al modificar juventud:", err.message);
    return null;
  }
};
