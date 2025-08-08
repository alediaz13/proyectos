import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ServiciosPage = () => {
  const [servicios, setServicios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(true);

  // Cargar servicios al montar
  useEffect(() => {
    fetch(`${API_URL}/servicios`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Servicios recibidos:", data);
        setServicios(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error al obtener servicios:", err);
        setLoading(false);
      });
  }, []);

  // Agregar nuevo servicio
  const handleAgregar = () => {
    const nuevo = { nombre, descripcion };

    fetch(`${API_URL}/servicios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    })
      .then((res) => res.json())
      .then((data) => {
        setServicios((prev) => [...prev, data]);
        setNombre("");
        setDescripcion("");
      })
      .catch((err) => console.error("❌ Error al agregar servicio:", err));
  };

  // Eliminar servicio
  const handleEliminar = (id) => {
    fetch(`${API_URL}/servicios/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setServicios((prev) => prev.filter((s) => s._id !== id));
      })
      .catch((err) => console.error("❌ Error al eliminar servicio:", err));
  };

  // Modificar servicio (placeholder)
  const handleModificar = (id) => {
    alert(`Modificar servicio con ID: ${id}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛠️ Base de Datos: Servicios</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre del servicio"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        />
        <button onClick={handleAgregar} style={{ marginLeft: "0.5rem" }}>
          ➕ Agregar
        </button>
      </div>

      {loading ? (
        <p>Cargando servicios...</p>
      ) : servicios.length === 0 ? (
        <p>No hay servicios disponibles.</p>
      ) : (
        <ul>
          {servicios.map((servicio) => (
            <li key={servicio._id} style={{ marginBottom: "0.5rem" }}>
              <strong>{servicio.nombre}</strong>: {servicio.descripcion || "Sin descripción"}
              <button onClick={() => handleModificar(servicio._id)} style={{ marginLeft: "1rem" }}>
                ✏️ Modificar
              </button>
              <button onClick={() => handleEliminar(servicio._id)} style={{ marginLeft: "0.5rem" }}>
                🗑️ Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiciosPage;
