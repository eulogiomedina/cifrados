// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Mi Aplicación de Cifrado.</p>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    maxWidth: '1500px',           // Reducir el ancho máximo del footer
    margin: '0 auto',             // Centrar el footer
    padding: '15px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    position: 'relative',         // Cambiar la posición para que el footer no tape el contenido
  },
};

export default Footer;
