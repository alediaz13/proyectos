import express from "express";
import {
  obtenerJovenes,
  agregarJoven,
} from "../../controllers/juventudes/juventudes.controller.js";

const router = express.Router();

router.get("/", obtenerJovenes);
router.post("/", agregarJoven); // 👈 Esta es la nueva ruta

export default router;
