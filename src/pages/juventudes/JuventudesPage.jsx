import { useEffect, useState } from 'react';

function JuventudesPage() {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/juventudes')
      .then(res => res.json())
      .then(data => {
        console.log('Datos recibidos:', data);
        setDatos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar datos:', err);
        setLoading(false);
      });
  }, []);

  const handleAgregar = () => {
    const nuevo = {
      nombre,
      edad: parseInt(edad),
      intereses: [],
    };

    fetch('http://localhost:3000/juventudes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo),
    })
      .then(res => res.json())
      .then(data => {
        setDatos(prev => [...prev, data]);
        setNombre('');
        setEdad('');
      })
      .catch(err => console.error('Error al agregar:', err));
  };

  const handleModificar = (id) => {
    alert(`Modificar elemento con ID: ${id}`);
  };

  const handleEliminar = (id) => {
    fetch(`http://localhost:3000/juventudes/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setDatos(prev => prev.filter(item => item._id !== id));
      })
      .catch(err => console.error('Error al eliminar:', err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Base de Datos: Juventudes</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={e => setEdad(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        />
        <button onClick={handleAgregar} style={{ marginLeft: '0.5rem' }}>
          ➕ Agregar
        </button>
      </div>

      {loading ? (
        <p>Cargando datos...</p>
      ) : datos.length === 0 ? (
        <p>No hay registros disponibles.</p>
      ) : (
        <ul>
          {datos.map(item => (
            <li key={item._id} style={{ marginBottom: '0.5rem' }}>
              <strong>{item.nombre}</strong> ({item.edad} años)
              <button onClick={() => handleModificar(item._id)} style={{ marginLeft: '1rem' }}>
                ✏️ Modificar
              </button>
              <button onClick={() => handleEliminar(item._id)} style={{ marginLeft: '0.5rem' }}>
                🗑️ Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JuventudesPage;
