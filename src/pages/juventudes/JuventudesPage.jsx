import { useEffect, useState } from "react";
import {
  getJuventudes,
  crearJuventud,
  eliminarJuventud,
  modificarJuventud,
} from "../../services/juventudesAPI";
import Card from "../../components/Card";

function JuventudesPage() {
  const [jovenes, setJovenes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [loading, setLoading] = useState(true);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [jovenActual, setJovenActual] = useState(null);

  useEffect(() => {
    getJuventudes()
      .then((data) => {
        console.log("📦 Jóvenes recibidos:", data);
        setJovenes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error al obtener jóvenes:", err);
        setLoading(false);
      });
  }, []);

  const handleAgregar = () => {
    if (!nombre.trim()) {
      alert("⚠️ El nombre es obligatorio");
      return;
    }

    const nuevo = { nombre, edad: parseInt(edad) || 0 };

    if (modoEdicion && jovenActual) {
      modificarJuventud(jovenActual._id, nuevo)
        .then((modificado) => {
          setJovenes((prev) =>
            prev.map((j) => (j._id === modificado._id ? modificado : j))
          );
          resetFormulario();
        })
        .catch((err) => console.error("❌ Error al modificar joven:", err));
    } else {
      crearJuventud(nuevo)
        .then((data) => {
          setJovenes((prev) => [...prev, data]);
          resetFormulario();
        })
        .catch((err) => console.error("❌ Error al agregar joven:", err));
    }
  };

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este joven?");
    if (!confirmar) return;

    eliminarJuventud(id)
      .then(() => {
        setJovenes((prev) => prev.filter((j) => j._id !== id));
        if (jovenActual?._id === id) resetFormulario();
      })
      .catch((err) => console.error("❌ Error al eliminar joven:", err));
  };

  const handleModificar = (joven) => {
    setModoEdicion(true);
    setJovenActual(joven);
    setNombre(joven.nombre);
    setEdad(joven.edad.toString());
  };

  const resetFormulario = () => {
    setNombre("");
    setEdad("");
    setModoEdicion(false);
    setJovenActual(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🧑‍🎓 Base de Datos: Juventudes</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre del joven"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
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
        <p>Cargando jóvenes...</p>
      ) : jovenes.length === 0 ? (
        <p>No hay jóvenes registrados.</p>
      ) : (
        jovenes.map((joven) => (
          <Card
            key={joven._id}
            nombre={joven.nombre}
            descripcion={`Edad: ${joven.edad}`}
            onModificar={() => handleModificar(joven)}
            onEliminar={() => handleEliminar(joven._id)}
          />
        ))
      )}
    </div>
  );
}

export default JuventudesPage;
