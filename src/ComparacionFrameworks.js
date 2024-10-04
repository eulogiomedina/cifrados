// src/components/ComparacionFrameworks.js
import React from 'react';

function ComparacionFrameworks() {
  return (
    <div style={styles.container}>
      <h2>Comparación de Frameworks (Express vs Next.js)</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Framework</th>
            <th style={styles.th}>Rendimiento</th>
            <th style={styles.th}>Facilidad de Implementación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Express</td>
            <td style={styles.td}>
              Rendimiento alto, pero depende del manejo manual de optimizaciones.
              Ideal para aplicaciones ligeras y APIs.
            </td>
            <td style={styles.td}>
              Fácil de implementar. Es minimalista, lo que ofrece flexibilidad,
              pero requiere más configuración manual en comparación con frameworks más grandes.
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Next.js</td>
            <td style={styles.td}>
              Rendimiento optimizado por defecto, especialmente en aplicaciones con renderizado del lado del servidor (SSR)
              o estáticas (SSG). Puede ser más pesado que Express en algunos casos si no se usa correctamente.
            </td>
            <td style={styles.td}>
              Moderadamente fácil de implementar. Integra muchas características (SSR, SSG, API routes) directamente en el framework,
              lo que facilita el desarrollo completo. Sin embargo, puede ser más complejo que Express debido a estas características.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  table: {
    width: '60%', // Ajustar el ancho para centrar mejor la tabla
    borderCollapse: 'separate',
    borderSpacing: '10px', // Añadir espacio entre las celdas
    margin: '0 auto',
  },
  th: {
    border: '2px solid #ccc',
    padding: '12px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  td: {
    border: '2px solid #ccc',
    padding: '12px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
};

export default ComparacionFrameworks;
