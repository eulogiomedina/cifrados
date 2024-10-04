import React, { useState } from 'react';
import './CifradoCamellia.css'; // Estilos personalizados

const CifradoCamellia = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  // Función para generar una clave aleatoria de 32 caracteres
  const generarClave = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let claveGenerada = '';
    for (let i = 0; i < 32; i++) {
      claveGenerada += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setClave(claveGenerada);
    setError('');
  };

  const handleCifrar = async () => {
    if (!mensaje || !clave) {
      setError('Por favor, ingresa un mensaje y genera una clave.');
      setResultado('');
      return;
    }

    try {
      const response = await fetch('/api/cifrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje, clave }),
      });

      const data = await response.json();
      if (response.ok) {
        setResultado(data.cifrado);
        setError('');
      } else {
        setError(data.message || 'Error en el cifrado.');
        setResultado('');
      }
    } catch (err) {
      setError('Ocurrió un error al intentar cifrar el mensaje.');
    }
  };

  const handleDescifrar = async () => {
    if (!mensaje || !clave) {
      setError('Por favor, ingresa el mensaje cifrado y la clave correcta.');
      setResultado('');
      return;
    }

    try {
      const response = await fetch('/api/descifrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje, clave }),
      });

      const data = await response.json();
      if (response.ok) {
        setResultado(data.descifrado);
        setError('');
      } else {
        setError(data.message || 'Error en el descifrado.');
        setResultado('');
      }
    } catch (err) {
      setError('Ocurrió un error al intentar descifrar el mensaje.');
    }
  };

  return (
    <div className="cifrado-camellia">
      <h2>Cifrado con Camellia</h2>
      <div className="input-group">
        <label>Mensaje a Cifrar/Descifrar</label>
        <textarea
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa el mensaje"
        />
      </div>
      <div className="input-group">
        <label>Clave</label>
        <input
          type="text"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Ingresa o genera una clave"
          readOnly
        />
        <button onClick={generarClave}>Generar Clave</button> {/* Botón para generar la clave */}
      </div>
      <div className="button-group">
        <button onClick={handleCifrar}>Cifrar</button>
        <button onClick={handleDescifrar}>Descifrar</button>
      </div>

      {/* Mostrar errores si los hay */}
      {error && <div className="error">{error}</div>}

      {/* Mostrar el resultado del cifrado o descifrado */}
      {resultado && (
        <div className="resultado">
          <h3>Resultado:</h3>
          <textarea rows="4" value={resultado} readOnly />
        </div>
      )}
    </div>
  );
};

export default CifradoCamellia;
