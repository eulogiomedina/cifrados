// src/CifradoEscitala.js
import React, { useState } from 'react';
import './CifradoEscitala.css';

const CifradoEscitala = () => {
  const [mensaje, setMensaje] = useState('');
  const [columnas, setColumnas] = useState(3); // Valor predeterminado de columnas
  const [resultado, setResultado] = useState('');

  // Función para cifrar usando el método Escítala
  const cifrarEscitala = (mensaje, columnas) => {
    const filas = Math.ceil(mensaje.length / columnas); // Número de filas
    let resultado = '';

    for (let i = 0; i < columnas; i++) {
      for (let j = i; j < mensaje.length; j += columnas) {
        resultado += mensaje[j]; // Leer columna por columna
      }
    }

    return resultado;
  };

  // Función para descifrar usando el método Escítala
  const descifrarEscitala = (mensaje, columnas) => {
    const filas = Math.ceil(mensaje.length / columnas);
    let resultado = '';
    let matriz = new Array(filas).fill('').map(() => new Array(columnas).fill(''));

    let index = 0;
    for (let i = 0; i < columnas; i++) {
      for (let j = 0; j < filas; j++) {
        if (index < mensaje.length) {
          matriz[j][i] = mensaje[index++];
        }
      }
    }

    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        if (matriz[i][j]) {
          resultado += matriz[i][j];
        }
      }
    }

    return resultado;
  };

  // Función que se ejecuta al hacer clic en "Cifrar"
  const handleCifrar = () => {
    setResultado(cifrarEscitala(mensaje, columnas));
  };

  // Función que se ejecuta al hacer clic en "Descifrar"
  const handleDescifrar = () => {
    setResultado(descifrarEscitala(mensaje, columnas));
  };

  return (
    <div className="escitala-content">
      <h2>Cifrado Escítala</h2>
      
      <div className="escitala-grid">
        <div className="left-side">
          <div className="input-group">
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Ingresa el mensaje a cifrar"
              rows="5"
            />
          </div>
          <div className="input-group">
            <label>Número de columnas:</label>
            <select value={columnas} onChange={(e) => setColumnas(parseInt(e.target.value))}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="input-group">
            <textarea
              value={resultado}
              readOnly
              placeholder="El mensaje cifrado/descifrado aparecerá aquí"
              rows="5"
            />
          </div>
          <div className="button-group">
            <button onClick={handleCifrar}>Cifrar</button>
            <button onClick={handleDescifrar}>Descifrar</button>
          </div>
        </div>

        <div className="right-side">
  <h3>Instrucciones para el Cifrado Escítala:</h3>
  <p>
    El **Cifrado Escítala** es un método de cifrado por transposición. El mensaje se organiza en una matriz de columnas y se lee columna por columna para obtener el texto cifrado.
  </p>
  
  <h4>Pasos para cifrar un mensaje:</h4>
  <ol>
    <li>Ingresa el mensaje a cifrar.</li>
    <li>Selecciona el número de columnas (el grosor de la vara).</li>
    <li>El mensaje se organiza en una matriz de filas y columnas.</li>
    <li>El texto cifrado se genera leyendo las columnas de arriba a abajo.</li>
  </ol>
  <h4>Pasos para descifrar un mensaje:</h4>
  <ol>
    <li>Ingresa el mensaje cifrado.</li>
    <li>Selecciona el mismo número de columnas usado para cifrar.</li>
    <li>El mensaje se reorganiza en filas y se lee fila por fila para obtener el texto original.</li>
  </ol>
</div>
      </div>
    </div>
  );
};

export default CifradoEscitala;
