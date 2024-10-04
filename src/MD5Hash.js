import React, { useState } from 'react';
import './MD5Hash.css'; // Estilos opcionales

const MD5Hash = () => {
  const [mensaje, setMensaje] = useState('');
  const [hash, setHash] = useState('');
  const [error, setError] = useState('');

  // Función para enviar el mensaje al servidor y generar el hash MD5
  const generarHash = async () => {
    if (!mensaje) {
      setError('Por favor, ingresa un mensaje para generar el hash.');
      return;
    }

    try {
      const response = await fetch('/api/md5/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje }),
      });

      const data = await response.json();
      setHash(data.hash);
      setError('');
    } catch (error) {
      setError('Error al generar el hash MD5.');
    }
  };

  return (
    <div className="md5-hash">
      <h2>Generar Hash MD5</h2>

      <div className="input-group">
        <label>Mensaje</label>
        <textarea
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa el mensaje a hashear"
        />
      </div>

      <div className="button-group">
        <button onClick={generarHash}>Generar Hash MD5</button>
      </div>

      {hash && (
        <div className="result-group">
          <label>Hash Generado (MD5):</label>
          <textarea rows="2" value={hash} readOnly />
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default MD5Hash;
