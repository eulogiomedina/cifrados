// src/Header.js
import React from 'react';
import './Header.css'; // Asegúrate de enlazar el archivo CS

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Métodos de Cifrado</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',

    
  }
  
};


export default Header;
