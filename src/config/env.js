// Configuración de variables de entorno
export const ENV_CONFIG = {
  // API
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  
  // Entorno
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  IS_DEV: import.meta.env.DEV || false,
  IS_PROD: import.meta.env.PROD || false,
  
  // URLs
  BASE_URL: import.meta.env.BASE_URL || '/',
  
  // Debug
  DEBUG: import.meta.env.VITE_DEBUG === 'true' || false
};

// Función para obtener la URL completa de la API
export const getFullApiUrl = (endpoint) => {
  const baseUrl = ENV_CONFIG.API_URL.replace(/\/$/, ''); // Remover trailing slash
  const cleanEndpoint = endpoint.replace(/^\//, ''); // Remover leading slash
  return `${baseUrl}/${cleanEndpoint}`;
};

// Función para validar si la API está disponible
export const isApiAvailable = async () => {
  try {
    const response = await fetch(getFullApiUrl('api/juventudes'));
    return response.ok;
  } catch (error) {
    console.warn('API no disponible:', error);
    return false;
  }
};

