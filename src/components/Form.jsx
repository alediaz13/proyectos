import { useState } from "react";

export default function Form({ onAgregar }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    activo: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/servicios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const nuevo = await res.json();
      onAgregar(nuevo); // actualiza la lista en App.jsx
      setFormData({ nombre: "", descripcion: "", categoria: "", activo: true });
    } catch (err) {
      console.error("Error al agregar servicio:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" />
      <input name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Categoría" />
      <label>
        Activo:
        <input type="checkbox" name="activo" checked={formData.activo} onChange={handleChange} />
      </label>
      <button type="submit">Agregar Servicio</button>
    </form>
  );
}
