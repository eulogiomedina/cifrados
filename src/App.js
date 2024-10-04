// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';  // Usar HashRouter
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import CifradoCesar from './CifradoCesar';
import CifradoEscitala from './CifradoEscitala';
import CifradoCamellia from './CifradoCamellia'; // Importa el componente de Camellia
import SchnorrSignature from './SchnorrSignature'; // Importa el componente
import MD5Hash from './MD5Hash';  // Importa tu componente MD5

import './App.css';

function App() {
  return (
    <Router> {/* Cambiado a HashRouter */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/cesar" element={<CifradoCesar />} />
          <Route path="/escitala" element={<CifradoEscitala />} />
          <Route path="/camellia" element={<CifradoCamellia />} /> {/* Nueva ruta */}
          <Route path="/schnorr-signature" element={<SchnorrSignature />} /> {/* Nueva ruta */}
          <Route path="/md5" element={<MD5Hash />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
