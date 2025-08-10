import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;
fetch(`${import.meta.env.VITE_API_URL}/juventudes`)


export const useJuventudes = () => {
  const [juventudes, setJuventudes] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerJuventudes = async () => {
    try {
      const res = await fetch(`${API_URL}/api/juventudes`);
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
      const res = await fetch(`${API_URL}/api/juventudes`, {
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
