import { useState, useEffect } from 'react';
import { getApiUrl, API_CONFIG } from '../config/api.js';

export const useJuventudes = () => {
  const [juventudes, setJuventudes] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerJuventudes = async () => {
    try {
      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.JUVENTUDES));
      const data = await res.json();
      setJuventudes(data);
    } catch (error) {
      console.error('Error al obtener juventudes:', error);
    } finally {
      setLoading(false);
    }
  };

  const crearJuventud = async (nuevaJuventud) => {
    try {
      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.JUVENTUDES), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaJuventud),
      });
      return await res.json();
    } catch (error) {
      console.error('Error al crear juventud:', error);
      return null;
    }
  };

  useEffect(() => {
    obtenerJuventudes();
  }, []);

  return { juventudes, loading, crearJuventud };
};
