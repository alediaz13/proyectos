// backend/routes/juventudes/juventudes.routes.js

import express from 'express';
import Juventud from '../../models/juventudes/Juventud.js';

const router = express.Router();

// Obtener todas las juventudes
router.get('/', async (req, res) => {
  try {
    const datos = await Juventud.find();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener juventudes' });
  }
});

// Crear una nueva juventud
router.post('/', async (req, res) => {
  try {
    const nueva = new Juventud(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear juventud' });
  }
});

export default router;
