import React from 'react';

const Caja = ({ onBack }) => {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>Técnica: Caja de Sorpresas</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in" style={{ borderTop: '8px solid #f472b6' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '60px' }}>🎁</span>
            <h2 className="section-title" style={{ fontSize: '2rem', color: '#db2777' }}>Caja de Sorpresas</h2>
          </div>

          <div className="info-box">
            <h3 className="section-title" style={{ color: '#db2777' }}>📖 ¿Qué es?</h3>
            <p>Es una técnica de refuerzo positivo intermitente y lúdico. El buen comportamiento es premiado con una sorpresa aleatoria, lo que genera alta motivación y expectativa positiva en el aula.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title" style={{ color: '#db2777' }}>🎯 Objetivo</h3>
            <p>Reforzar conductas esperadas mediante recompensas aleatorias que promueven el esfuerzo y la autorregulación de forma divertida.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title" style={{ color: '#db2777' }}>🧭 Aplicación paso a paso</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Criterios:</strong> Establece reglas claras de qué conductas ganan un premio.</li>
              <li><strong>Expectativa:</strong> Informa que la caja contiene premios materiales o privilegios.</li>
              <li><strong>Observación:</strong> Cuando alguien cumpla el criterio, permite sacar un papel de la caja.</li>
              <li><strong>Variedad:</strong> Incluye premios tangibles (útiles) e intangibles (elegir música o juegos).</li>
            </ul>
          </div>

          <div className="info-box" style={{ borderLeft: '4px solid #f472b6', paddingLeft: '15px' }}>
            <h3 className="section-title" style={{ color: '#db2777' }}>💡 Tipos de Reforzadores</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>🔁 Intermitente:</strong> La aleatoriedad aumenta la eficacia del refuerzo.</li>
              <li style={{ marginBottom: '10px' }}><strong>🎲 Lúdico:</strong> Se refuerza a través del juego y la dinámica.</li>
              <li><strong>🎨 Simbólico:</strong> Creatividad y sorpresa como motor de cambio.</li>
            </ul>
          </div>

          <div className="info-box" style={{ background: '#fdf2f8', padding: '15px', borderRadius: '15px', marginTop: '20px', border: '1px solid #fbcfe8' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem', color: '#db2777' }}>📌 Ejemplo práctico</h3>
            <p style={{ fontStyle: 'italic', color: '#9d174d' }}>
              <strong>Docente:</strong> “Hoy el grupo trabajó en armonía. ¡Juan, puedes sacar un papel de la caja!” <br/>
              <strong>Alumno:</strong> Saca un papel: <em>“Vale por elegir el juego del viernes”</em>. <br/>
              <strong>Docente:</strong> “¡Felicidades! Tu esfuerzo trajo un beneficio para todos.”
            </p>
          </div>

          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: 'linear-gradient(135deg, #fce7f3 0%, #ffffff 100%)', 
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #fbcfe8'
          }}>
            <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#be185d' }}>🔎 Cierre Reflexivo</h3>
            <p style={{ fontWeight: '500', color: '#9d174d' }}>
              "La caja de sorpresas nos recuerda que el reconocimiento puede ser divertido e inesperado. Celebrar el esfuerzo fortalece el vínculo."
            </p>
          </div>

          <button className="btn-azul-full" onClick={onBack} style={{ marginTop: '30px', background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)' }}>
            Volver al Panel Principal
          </button>
        </div>
      </main>
    </div>
  );
};

export default Caja;