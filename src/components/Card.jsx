export default function Card({ nombre, descripcion, categoria, activo, onModificar, onEliminar }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{nombre}</h3>
      {descripcion && <p>{descripcion}</p>}
      {categoria && <p><strong>Categoría:</strong> {categoria}</p>}
      {activo !== undefined && (
        <p><strong>Activo:</strong> {activo ? "✅ Sí" : "❌ No"}</p>
      )}

      {(onModificar || onEliminar) && (
        <div style={{ marginTop: "0.5rem" }}>
          {onModificar && (
            <button onClick={onModificar} style={{ marginRight: "0.5rem" }}>
              ✏️ Modificar
            </button>
          )}
          {onEliminar && (
            <button onClick={onEliminar}>
              🗑️ Eliminar
            </button>
          )}
        </div>
      )}
    </div>
  );
}
