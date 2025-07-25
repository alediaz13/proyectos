import { useState } from "react";

export default function FormularioAgregar({ onNuevaTarea }) {
  const [titulo, setTitulo] = useState("");
  const [completada, setCompletada] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      setMensaje("⚠️ El título no puede estar vacío.");
      return;
    }

    const nueva = { titulo, completada };
    await onNuevaTarea(nueva);
    setMensaje("✅ Tarea agregada con éxito");
    setTitulo("");
    setCompletada(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar tarea</h3>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <label>
        <input
          type="checkbox"
          checked={completada}
          onChange={(e) => setCompletada(e.target.checked)}
        />
        Completada
      </label>
      <button type="submit">Crear tarea</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}
