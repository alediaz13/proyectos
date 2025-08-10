import { useJuventudes } from '../../hooks/useJuventudes';
import { useState } from 'react';

const JuventudesPage = () => {
  const { juventudes, loading, crearJuventud } = useJuventudes();
  const [form, setForm] = useState({ nombre: '', edad: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nueva = await crearJuventud(form);
    if (nueva) {
      alert('✅ Juventud creada');
      window.location.reload(); // o actualizar el estado local
    }
  };

  return (
    <div>
      <h2>Juventudes</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
        />
        <button type="submit">Crear Juventud</button>
      </form>

      {loading ? (
        <p>Cargando juventudes...</p>
      ) : (
        <ul>
          {juventudes.map((j) => (
            <li key={j._id}>
              <strong>{j.nombre}</strong> ({j.edad} años)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JuventudesPage;
