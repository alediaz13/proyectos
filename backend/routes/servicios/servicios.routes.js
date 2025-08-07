import express from "express";
import { obtenerServicios } from "../../controllers/servicios/servicios.controller.js";

const router = express.Router();

router.get("/", obtenerServicios);

export default router;
