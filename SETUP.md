# Configuración del Proyecto KEKO

## Problema Resuelto: Errores 404 en la API

Los errores 404 que estabas experimentando se debían a:

1. Falta de configuración de variables de entorno
2. URLs de API incorrectas en el frontend
3. Backend no corriendo

## Solución Implementada

### 1. Configuración Centralizada

- ✅ Archivo `src/config/env.js` - Manejo de variables de entorno
- ✅ Archivo `src/config/api.js` - Configuración centralizada de la API
- ✅ Hooks actualizados para usar la nueva configuración

### 2. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
VITE_API_URL=http://localhost:3000
```

### 3. Pasos para Ejecutar

#### Backend:

```bash
cd backend
npm install
npm start
```

#### Frontend:

```bash
npm install
npm run dev
```

## Estructura de la API

- **GET** `/api/juventudes` - Obtener todas las juventudes
- **POST** `/api/juventudes` - Crear nueva juventud
- **GET** `/api/servicios` - Obtener todos los servicios
- **POST** `/api/servicios` - Crear nuevo servicio

## Verificación

1. El backend debe estar corriendo en `http://localhost:3000`
2. Las rutas de la API deben responder correctamente
3. El frontend debe poder hacer peticiones sin errores 404

## Notas Importantes

- El backend usa MongoDB (asegúrate de que esté configurado)
- Las rutas están protegidas con CORS
- El frontend usa Vite con React
- Los hooks están optimizados para manejo de errores
