  import express from "express";
  import {
    obtenerServicios,
    agregarServicio,
    eliminarServicio,
    modificarServicio,
  } from "../../controllers/servicios/servicios.controller.js";

  const router = express.Router();

  // Obtener todos los servicios
  router.get("/", obtenerServicios);

  // Agregar un nuevo servicio
  router.post("/", agregarServicio);

  // Eliminar un servicio por ID
  router.delete("/:id", eliminarServicio);

  // Modificar un servicio por ID
  router.put("/:id", modificarServicio);

  export default router;
