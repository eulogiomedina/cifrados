import React, { useState } from 'react';
import './SchnorrSignature.css'; // Estilos personalizados

const SchnorrSignature = () => {
  const [mensaje, setMensaje] = useState('');
  const [clavePrivada, setClavePrivada] = useState('');
  const [clavePublica, setClavePublica] = useState('');
  const [firma, setFirma] = useState('');
  const [resultadoVerificacion, setResultadoVerificacion] = useState('');
  const [error, setError] = useState('');

  const generarClaves = async () => {
    // Aquí iría la lógica para generar claves
    try {
      const response = await fetch('/api/generar-claves');
      const data = await response.json();
      setClavePrivada(data.clavePrivada);
      setClavePublica(data.clavePublica);
      setError('');
    } catch (error) {
      setError('Error al generar las claves.');
    }
  };

  const firmarMensaje = async () => {
    if (!mensaje || !clavePrivada) {
      setError('Por favor, ingresa un mensaje y genera una clave privada.');
      return;
    }

    try {
      const response = await fetch('/api/firmar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje, clavePrivada }),
      });

      const data = await response.json();
      setFirma(data.firma);
      setError('');
    } catch (error) {
      setError('Error al firmar el mensaje.');
    }
  };

  const verificarFirma = async () => {
    if (!mensaje || !clavePublica || !firma) {
      setError('Por favor, ingresa el mensaje, la firma y la clave pública.');
      return;
    }

    try {
      const response = await fetch('/api/verificar-firma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje, clavePublica, firma }),
      });

      const data = await response.json();
      setResultadoVerificacion(data.verificado ? 'Firma válida' : 'Firma inválida');
      setError('');
    } catch (error) {
      setError('Error al verificar la firma.');
    }
  };

  return (
    <div className="schnorr-signature">
      <h2>Cifrado Asimétrico con Schnorr Signature</h2>

      <div className="input-group">
        <label>Mensaje</label>
        <textarea
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa el mensaje"
        />
      </div>

      <div className="button-group">
        <button onClick={generarClaves}>Generar Par de Claves</button>
      </div>

      {clavePrivada && (
        <div className="result-group">
          <label>Clave Privada (No compartir):</label>
          <textarea rows="2" value={clavePrivada} readOnly />
        </div>
      )}

      {clavePublica && (
        <div className="result-group">
          <label>Clave Pública (Compartir para verificación):</label>
          <textarea rows="2" value={clavePublica} readOnly />
        </div>
      )}

      <div className="button-group">
        <button onClick={firmarMensaje}>Firmar Mensaje</button>
      </div>

      {firma && (
        <div className="result-group">
          <label>Firma Generada:</label>
          <textarea rows="3" value={firma} readOnly />
        </div>
      )}

      <div className="input-group">
        <label>Clave Pública para Verificar</label>
        <input
          type="text"
          value={clavePublica}
          onChange={(e) => setClavePublica(e.target.value)}
          placeholder="Ingresa la clave pública"
        />
      </div>

      <div className="input-group">
        <label>Firma para Verificar</label>
        <input
          type="text"
          value={firma}
          onChange={(e) => setFirma(e.target.value)}
          placeholder="Ingresa la firma"
        />
      </div>

      <div className="button-group">
        <button onClick={verificarFirma}>Verificar Firma</button>
      </div>

      {resultadoVerificacion && (
        <div className={`result-group ${resultadoVerificacion === 'Firma válida' ? 'valido' : 'invalido'}`}>
          <p>{resultadoVerificacion}</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SchnorrSignature;
