// backend/routes/servicios.js
const express = require('express');
const Servicio = require('../../models/servicios/Servicio');

const router = express.Router();

// Obtener todos los servicios
router.get('/', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
});

// Crear un nuevo servicio
router.post('/', async (req, res) => {
  try {
    const nuevo = new Servicio(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear servicio' });
  }
});

module.exports = router;
