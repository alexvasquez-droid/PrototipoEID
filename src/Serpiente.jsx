import React from 'react';

const Serpiente = ({ onBack }) => {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>Técnica: La Serpiente</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '60px' }}>🐍</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Técnica de la Serpiente</h2>
          </div>

          <div className="info-box">
            <h3 className="section-title">📖 ¿Qué es?</h3>
            <p>Es una intervención sutil, sigilosa y flexible. El docente actúa con discreción y rapidez, sin reforzar la conducta disruptiva ni interrumpir el desarrollo de la clase.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🎯 Objetivo</h3>
            <p>Redirigir la conducta sin confrontación ni exposición, manteniendo el ritmo del grupo y protegiendo la dignidad del alumno.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🧭 Aplicación paso a paso</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Detecta:</strong> El inicio de la conducta sin hacer mención directa.</li>
              <li><strong>Claves no verbales:</strong> Intervención sutil con mirada, señal o gesto.</li>
              <li><strong>Redirige:</strong> Usa una consigna clara y corta: <em>“Tarea en 2 minutos.”</em></li>
              <li><strong>Privacidad:</strong> Si es necesario retirar al alumno, hazlo sin generar exposición.</li>
              <li><strong>Diálogo:</strong> Una vez fuera del foco grupal, conversa en privado sobre lo sucedido.</li>
            </ul>
          </div>

          <div className="info-box" style={{ borderLeft: '4px solid #0070bb', paddingLeft: '15px' }}>
            <h3 className="section-title">💡 Reforzadores Recomendados</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>🚫 Evitar:</strong> El castigo público para disminuir la confrontación.</li>
              <li style={{ marginBottom: '10px' }}><strong>🤝 En Privado:</strong> Reforzar el esfuerzo por el cambio de actitud.</li>
              <li><strong>🌟 En Público:</strong> Reforzar únicamente la conducta esperada cuando ocurra.</li>
            </ul>
          </div>

          <div className="info-box" style={{ background: '#f0f9ff', padding: '15px', borderRadius: '15px', marginTop: '20px' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem' }}>📌 Ejemplo práctico</h3>
            <p style={{ fontStyle: 'italic', color: '#475569' }}>
              <strong>Situación:</strong> El alumno murmura constantemente. <br/>
              <strong>Intervención:</strong> El docente se acerca caminando por el aula, al pasar junto a él lo señala suavemente y le muestra la consigna en su cuaderno sin detener su explicación.
            </p>
          </div>

          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)', 
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #bbf7d0'
          }}>
            <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>🔎 Cierre Reflexivo</h3>
            <p style={{ fontWeight: '500', color: '#15803d' }}>
              "La serpiente nos enseña que la intervención más efectiva no siempre es la más visible. A veces, el silencio y la sutileza son las mejores herramientas para guiar con respeto."
            </p>
          </div>

          <button className="btn-azul-full" onClick={onBack} style={{ marginTop: '30px' }}>
            Volver al Panel Principal
          </button>
        </div>
      </main>
    </div>
  );
};

export default Serpiente;