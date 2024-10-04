// src/MainContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-container">
        <div className="card card-left">
          <h2>Cifrado César</h2>
          <p>
            El Cifrado César es una de las técnicas más antiguas de cifrado,
            utilizado por Julio César en la antigüedad. Funciona desplazando
            las letras del alfabeto un número determinado de posiciones.
          </p>
          <button className="cipher-button"><Link to="/cesar">Cifrar con el metodo</Link></button>
        </div>

        <div className="card card-right">
          <h2>Cifrado Escítala</h2>
          <p>
            El Cifrado Escítala fue utilizado por los antiguos espartanos.
            Consiste en escribir el mensaje sobre una tira de cuero alrededor
            de un cilindro de un tamaño específico (la clave).
          </p>
          <button className="cipher-button"><Link to="/escitala">Cifrar con el metodo</Link></button>
        </div>

        {/* Nueva tarjeta para el cifrado Camellia */}
        <div className="card card-left">
          <h2>Cifrado Simétrico: Camellia</h2>
          <p>
            El cifrado Camellia es un algoritmo de cifrado simétrico de clave 
            secreta. Es utilizado para proteger datos sensibles mediante el 
            uso de la misma clave tanto para cifrar como para descifrar la 
            información.
          </p>
          <button className="cipher-button"><Link to="/camellia">Cifrar con Camellia</Link></button>
        </div>

        {/* Nueva tarjeta para Schnorr Signature */}
        <div className="card card-right">
          <h2>Cifrado Asimétrico: Schnorr Signature</h2>
          <p>
            Schnorr Signature es un esquema de firma digital basado en criptografía 
            asimétrica. Utiliza una clave pública y una privada para firmar y verificar 
            mensajes, garantizando autenticidad e integridad.
          </p>
          <button className="cipher-button"><Link to="/schnorr-signature">Firmar con Schnorr Signature</Link></button>
        </div>

        {/* Nueva tarjeta para el hash MD5 */}
        <div className="card card-left">
          <h2>Hash: MD5 (Message Digest Algorithm 5)</h2>
          <p>
            MD5 es un algoritmo de hash utilizado para generar un valor de 
            resumen (digest) único a partir de una entrada de datos. Se utiliza 
            principalmente para verificar la integridad de los archivos.
          </p>
          <button className="cipher-button"><Link to="/md5">Generar hash con MD5</Link></button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
