// Configuración de la API
import { ENV_CONFIG, getFullApiUrl } from './env.js';

export const API_CONFIG = {
  BASE_URL: ENV_CONFIG.API_URL,
  ENDPOINTS: {
    JUVENTUDES: '/api/juventudes',
    SERVICIOS: '/api/servicios'
  }
};

export const getApiUrl = (endpoint) => {
  return getFullApiUrl(endpoint);
};

// Función para hacer peticiones HTTP con manejo de errores
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = getApiUrl(endpoint);
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error en petición a ${endpoint}:`, error);
    throw error;
  }
};
