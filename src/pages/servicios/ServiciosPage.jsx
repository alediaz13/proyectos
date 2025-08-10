import { useServicios } from '../../hooks/useServicios';
import { useState } from 'react';

const ServiciosPage = () => {
  const { servicios, loading, crearServicio } = useServicios();
  const [form, setForm] = useState({ nombre: '', descripcion: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevo = await crearServicio(form);
    if (nuevo) {
      alert('✅ Servicio creado');
      window.location.reload(); // o actualizar el estado local si querés evitar reload
    }
  };

  return (
    <div>
      <h2>Servicios</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
        />
        <button type="submit">Crear Servicio</button>
      </form>

      {loading ? (
        <p>Cargando servicios...</p>
      ) : (
        <ul>
          {servicios.map((s) => (
            <li key={s._id}>
              <strong>{s.nombre}</strong>: {s.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiciosPage;
