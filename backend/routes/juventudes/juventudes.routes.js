import express from "express";
import {
  obtenerJovenes,
  agregarJoven,
} from "../../controllers/juventudes/juventudes.controller.js";

export default function createJuventudesRouter(juventudesConn) {
  const router = express.Router();

  router.get("/", (req, res) => obtenerJovenes(req, res, juventudesConn));
  router.post("/", (req, res) => agregarJoven(req, res, juventudesConn));

  return router;
}
