import { useState, useEffect } from "react";
import FormularioEditar from "./FormularioEditar";
import FormularioAgregar from "./FormularioAgregar";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaActual, setTareaActual] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  // 🔄 Carga inicial de tareas
  useEffect(() => {
    fetch(`${API_URL}/tareas`)
      .then(res => res.json())
      .then(data => setTareas(data))
      .catch(err => console.error("❌ Error al obtener tareas:", err));
  }, []);

  // ✅ Agregar nueva tarea
  const agregarTarea = async (nueva) => {
    const res = await fetch(`${API_URL}/tareas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nueva),
    });
    if (res.ok) {
      const guardada = await res.json();
      setTareas([...tareas, guardada]);
    }
  };

  // ✏️ Modificar tarea existente
  const handleTareaModificada = (modificada) => {
    setTareas(prev =>
      prev.map(t => (t._id === modificada._id ? modificada : t))
    );
    setModoEdicion(false);
    setTareaActual(null);
  };

  // 🗑️ Eliminar tarea con confirmación
  const eliminarTarea = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés borrar esta tarea?");
    if (!confirmar) return;

    try {
      const res = await fetch(`${API_URL}/tareas/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTareas(prev => prev.filter(t => t._id !== id));
        alert("✅ Tarea eliminada correctamente");
        setTareaActual(null);
        setModoEdicion(false);
      } else {
        alert("❌ No se pudo eliminar la tarea");
      }
    } catch (err) {
      console.error("❌ Error al eliminar:", err);
      alert("⚠️ Hubo un error al intentar eliminar la tarea");
    }
  };

  return (
    <div className="contenedor">
      <h2>Mis Tareas</h2>

      <div className="panel-botones">
        <button onClick={() => { setModoEdicion(false); setTareaActual(null); }}>➕ Agregar</button>
        <button onClick={() => tareaActual && setModoEdicion(true)}>✏️ Modificar</button>
        <button onClick={() => tareaActual && eliminarTarea(tareaActual._id)}>🗑️ Eliminar</button>
      </div>

      {/* 🧠 Elegir entre agregar o editar */}
      {modoEdicion && tareaActual ? (
        <FormularioEditar
          tarea={tareaActual}
          onTareaModificada={handleTareaModificada}
        />
      ) : (
        <FormularioAgregar onNuevaTarea={agregarTarea} />
      )}

      {/* 📋 Lista de tareas */}
      {tareas.length === 0 ? (
        <p>📭 No hay tareas guardadas aún</p>
      ) : (
        <ul>
          {tareas.map(t => (
            <li
              key={t._id}
              style={{ fontWeight: tareaActual?._id === t._id ? "bold" : "normal" }}
              onClick={() => setTareaActual(t)}
            >
              {t.titulo} {t.completada ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
