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
          <button className="cipher-button"><Link to="/cesar">Cifrar con el metodo</Link>
</button>
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
      </div>
    </div>
  );
};

export default MainContent;
