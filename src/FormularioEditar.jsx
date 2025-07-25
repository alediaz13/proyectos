import { useState } from "react";

export default function FormularioEditar({ tarea, onTareaModificada }) {
  const [titulo, setTitulo] = useState(tarea.titulo);
  const [completada, setCompletada] = useState(tarea.completada || false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/tareas/${tarea._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, completada }),
    });

    if (res.ok) {
      const tareaActualizada = await res.json();
      setMensaje("✅ Tarea modificada con éxito");
      onTareaModificada(tareaActualizada);
    } else {
      setMensaje("❌ Error al modificar la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar tarea</h3>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Modificar tarea..."
      />
      <label>
        <input
          type="checkbox"
          checked={completada}
          onChange={(e) => setCompletada(e.target.checked)}
        />
        Completada
      </label>
      <button type="submit">Guardar cambios</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}
