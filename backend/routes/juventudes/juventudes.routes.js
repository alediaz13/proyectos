import express from "express";
import { obtenerJovenes } from "../../controllers/juventudes/juventudes.controller.js";

const router = express.Router();

router.get("/", obtenerJovenes);

export default router;
