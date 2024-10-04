// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Mi Aplicación de Cifrado</h1>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',            
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '1500px',           // Reducir el ancho máximo del header
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '8px',
    zIndex: '1000',
    margin: '0 auto',             // Centrar el header
    right: '0',                   // Asegura que esté bien alineado
  },
};

export default Header;
