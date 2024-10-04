const express = require('express');
const cors = require('cors');
const schnorrRoutes = require('./routes/schnorrRoutes'); // Importar las rutas de Schnorr
const md5Routes = require('./routes/md5'); // Importar las rutas de MD5
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const IV_LENGTH = 16; // Longitud del vector de inicialización (IV)

// Función para ajustar la clave a 32 bytes (256 bits)
function ajustarClave(clave) {
  return crypto.createHash('sha256').update(clave).digest(); // Asegura una clave de 32 bytes
}

// Ruta para cifrar con Camellia
app.post('/api/cifrar', (req, res) => {
  const { mensaje, clave } = req.body;
  try {
    const iv = crypto.randomBytes(IV_LENGTH); // Genera un IV aleatorio de 16 bytes
    const key = ajustarClave(clave); // Ajusta la clave a 32 bytes
    const cifrador = crypto.createCipheriv('camellia-256-cbc', key, iv);
    let cifrado = cifrador.update(mensaje, 'utf8', 'hex');
    cifrado += cifrador.final('hex');
    res.json({ cifrado: iv.toString('hex') + ':' + cifrado });
  } catch (error) {
    res.status(400).json({ message: 'Error al cifrar el mensaje.' });
  }
});

// Ruta para descifrar con Camellia
app.post('/api/descifrar', (req, res) => {
  const { mensaje, clave } = req.body;
  try {
    const key = ajustarClave(clave);
    const parts = mensaje.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const cifrado = parts.join(':');
    const descifrador = crypto.createDecipheriv('camellia-256-cbc', key, iv);
    let descifrado = descifrador.update(cifrado, 'hex', 'utf8');
    descifrado += descifrador.final('utf8');
    res.json({ descifrado });
  } catch (error) {
    res.status(400).json({ message: 'Error al descifrar el mensaje.' });
  }
});

// Usar rutas Schnorr y MD5
app.use('/api/schnorr', schnorrRoutes);
app.use('/api/md5', md5Routes);

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
