// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Mi Aplicación de Cifrado</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/comparacion-frameworks" style={styles.link}>Comparación de Frameworks</Link> {/* Nueva pestaña */}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '1500px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '8px',
    zIndex: '1000',
    margin: '0 auto',
    right: '0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  }
};

export default Header;
