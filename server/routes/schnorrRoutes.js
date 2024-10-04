const express = require('express');
const router = express.Router();
const schnorr = require('bip-schnorr');
const crypto = require('crypto');
const { ec: EC } = require('elliptic');

// Crear instancia de curva elíptica
const ec = new EC('secp256k1');

// Ruta para generar el par de claves (clave pública y privada)
router.get('/generar-claves', (req, res) => {
  try {
    const clave = ec.genKeyPair();
    const clavePrivada = clave.getPrivate('hex');
    const clavePublica = clave.getPublic('hex');
    res.json({ clavePrivada, clavePublica });
  } catch (error) {
    res.status(500).json({ message: 'Error al generar las claves.' });
  }
});

// Ruta para firmar un mensaje usando Schnorr Signature
router.post('/firmar', (req, res) => {
  const { mensaje, clavePrivada } = req.body;
  try {
    const hash = crypto.createHash('sha256').update(mensaje).digest();
    const firma = schnorr.sign(Buffer.from(clavePrivada, 'hex'), hash);
    res.json({ firma: firma.toString('hex') });
  } catch (error) {
    res.status(400).json({ message: 'Error al firmar el mensaje.' });
  }
});

// Ruta para verificar una firma Schnorr
router.post('/verificar-firma', (req, res) => {
  const { mensaje, clavePublica, firma } = req.body;
  try {
    const hash = crypto.createHash('sha256').update(mensaje).digest();
    const esValido = schnorr.verify(Buffer.from(clavePublica, 'hex'), hash, Buffer.from(firma, 'hex'));
    res.json({ verificado: esValido });
  } catch (error) {
    res.status(400).json({ message: 'Error al verificar la firma.' });
  }
});

module.exports = router;
