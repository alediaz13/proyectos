const express = require('express');
const router = express.Router();
const {
  obtenerJuventudes,
  crearJuventud,
  actualizarJuventud,
  eliminarJuventud,
} = require('../../controllers/juventudes/juventudes.controller');

router.get('/', obtenerJuventudes);
router.post('/', crearJuventud);
router.put('/:id', actualizarJuventud);
router.delete('/:id', eliminarJuventud);

module.exports = router;
