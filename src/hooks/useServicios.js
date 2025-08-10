import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const useServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerServicios = async () => {
    try {
      const res = await fetch(`${API_URL}/api/servicios`);
      const data = await res.json();
      setServicios(data);
    } catch (error) {
      console.error('Error al obtener servicios:', error);
    } finally {
      setLoading(false);
    }
  };

  const crearServicio = async (nuevoServicio) => {
    try {
      const res = await fetch(`${API_URL}/api/servicios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoServicio),
      });
      return await res.json();
    } catch (error) {
      console.error('Error al crear servicio:', error);
      return null;
    }
  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  return { servicios, loading, crearServicio };
};
