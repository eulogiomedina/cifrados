// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import CifradoCesar from './CifradoCesar';
import CifradoEscitala from './CifradoEscitala'; // Importar el componente de Cifrado Escítala
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/cesar" element={<CifradoCesar />} />
          <Route path="/escitala" element={<CifradoEscitala />} /> {/* Añadir la ruta para Escítala */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
