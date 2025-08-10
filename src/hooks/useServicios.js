import { useState, useEffect } from 'react';
import { getApiUrl, API_CONFIG } from '../config/api.js';

export const useServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerServicios = async () => {
    try {
      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SERVICIOS));
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
      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SERVICIOS), {
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
