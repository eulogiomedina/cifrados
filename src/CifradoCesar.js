// src/CifradoCesar.js
import React, { useState } from 'react';
import './CifradoCesar.css';

const CifradoCesar = () => {
  const [mensaje, setMensaje] = useState('');
  const [desplazamiento, setDesplazamiento] = useState(1);
  const [resultado, setResultado] = useState('');

  const cifrarCesar = (texto, desplazamiento) => {
    return texto.split('').map((char) => {
      const codigo = char.charCodeAt(0);
      if (codigo >= 65 && codigo <= 90) {
        return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
      } else {
        return char;
      }
    }).join('');
  };

  const descifrarCesar = (texto, desplazamiento) => {
    return cifrarCesar(texto, -desplazamiento);
  };

  const handleCifrar = () => {
    setResultado(cifrarCesar(mensaje, desplazamiento));
  };

  const handleDescifrar = () => {
    setResultado(descifrarCesar(mensaje, desplazamiento));
  };

  return (
    <div className="cesar-content">
      <div className="left-side">
        <h2>Cifrado César</h2>
        <div className="input-group">
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Ingresa el mensaje a cifrar"
          />
        </div>
        <div className="input-group">
          <label>Desplazamiento:</label>
          <select value={desplazamiento} onChange={(e) => setDesplazamiento(parseInt(e.target.value))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="input-group">
          <textarea
            value={resultado}
            readOnly
            placeholder="El mensaje cifrado/descifrado aparecerá aquí"
          />
        </div>
        <div className="button-group">
          <button onClick={handleCifrar}>Cifrar</button>
          <button onClick={handleDescifrar}>Descifrar</button>
        </div>
      </div>

      <div className="right-side">
        <h3>Instrucciones:</h3>
        <p>
          El Cifrado César es un método antiguo de cifrado en el cual cada letra del mensaje original
          es reemplazada por otra letra que se encuentra un número fijo de posiciones adelante en el alfabeto.
        </p>
        <p>
          Para usar esta página:
          <ol>
            <li>Ingresa el mensaje que deseas cifrar o descifrar en el campo de texto.</li>
            <li>Elige un valor de desplazamiento entre 1 y 5 (esto indica cuántas posiciones se moverán las letras en el alfabeto).</li>
            <li>Haz clic en "Cifrar" para encriptar el mensaje o en "Descifrar" si ya está cifrado, para ello tienes que indicar es mismo valor de desplazamiento.</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default CifradoCesar;
