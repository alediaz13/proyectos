import { useEffect, useState } from "react";
import {
  getServicios,
  crearServicio,
  eliminarServicio,
  modificarServicio,
} from "../../services/serviciosAPI";
import Card from "../../components/Card";

function ServiciosPage() {
  const [servicios, setServicios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(true);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [servicioActual, setServicioActual] = useState(null);
  const [mensaje, setMensaje] = useState(""); // ✅ Nuevo estado para feedback

  useEffect(() => {
    getServicios()
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

  const handleAgregar = () => {
    if (!nombre.trim()) {
      alert("⚠️ El nombre del servicio es obligatorio");
      return;
    }

    const nuevo = { nombre, descripcion };

    if (modoEdicion && servicioActual) {
      modificarServicio(servicioActual._id, nuevo)
        .then((modificado) => {
          setServicios((prev) =>
            prev.map((s) => (s._id === modificado._id ? modificado : s))
          );
          setMensaje("✅ Servicio modificado con éxito"); // ✅ Mensaje de éxito
          resetFormulario();
          setTimeout(() => setMensaje(""), 3000); // ✅ Se borra en 3 segundos
        })
        .catch((err) => console.error("❌ Error al modificar servicio:", err));
    } else {
      crearServicio(nuevo)
        .then((data) => {
          setServicios((prev) => [...prev, data]);
          setMensaje("✅ Servicio agregado con éxito"); // ✅ Mensaje de éxito
          resetFormulario();
          setTimeout(() => setMensaje(""), 3000);
        })
        .catch((err) => console.error("❌ Error al agregar servicio:", err));
    }
  };

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este servicio?");
    if (!confirmar) return;

    eliminarServicio(id)
      .then(() => {
        setServicios((prev) => prev.filter((s) => s._id !== id));
        if (servicioActual?._id === id) resetFormulario();
        setMensaje("🗑️ Servicio eliminado");
        setTimeout(() => setMensaje(""), 3000);
      })
      .catch((err) => console.error("❌ Error al eliminar servicio:", err));
  };

  const handleModificar = (servicio) => {
    setModoEdicion(true);
    setServicioActual(servicio);
    setNombre(servicio.nombre);
    setDescripcion(servicio.descripcion || "");
  };

  const resetFormulario = () => {
    setNombre("");
    setDescripcion("");
    setModoEdicion(false);
    setServicioActual(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛠️ Base de Datos: Servicios</h2>

      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>} {/* ✅ Mensaje visual */}

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
          {modoEdicion ? "✏️ Modificar" : "➕ Agregar"}
        </button>
        {modoEdicion && (
          <button onClick={resetFormulario} style={{ marginLeft: "0.5rem" }}>
            ❌ Cancelar
          </button>
        )}
      </div>

      {loading ? (
        <p>Cargando servicios...</p>
      ) : servicios.length === 0 ? (
        <p>No hay servicios disponibles.</p>
      ) : (
        servicios.map((servicio) => (
          <Card
            key={servicio._id}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            onModificar={() => handleModificar(servicio)}
            onEliminar={() => handleEliminar(servicio._id)}
          />
        ))
      )}
    </div>
  );
}

export default ServiciosPage;
