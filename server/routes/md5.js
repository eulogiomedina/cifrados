const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// Ruta para generar el hash MD5
router.post('/hash', (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ message: 'Por favor, proporciona un mensaje para hashear.' });
  }

  try {
    const hash = crypto.createHash('md5').update(mensaje).digest('hex');
    res.json({ hash });
  } catch (error) {
    res.status(500).json({ message: 'Error al generar el hash MD5.' });
  }
});

module.exports = router;
