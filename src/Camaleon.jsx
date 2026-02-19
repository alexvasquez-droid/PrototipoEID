import React from 'react';

const Camaleon = ({ onBack }) => {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>Técnica: El Camaleón</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '60px' }}>🦎</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Técnica del Camaleón</h2>
          </div>

          <div className="info-box">
            <h3 className="section-title">📖 ¿Qué es?</h3>
            <p>El docente se “camufla” con las emociones del alumno para generar sintonía emocional y reducir tensiones. Se trata de acompañar sin confrontar, modelando calma y apertura.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🎯 Objetivo</h3>
            <p>Disminuir la intensidad emocional del alumno y facilitar el diálogo, sin reforzar la conducta disruptiva.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🧭 Pasos para aplicarla</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Observa:</strong> El estado emocional del alumno (enojado, ansioso, inquieto).</li>
              <li><strong>Adopta:</strong> Un tono y lenguaje corporal similar, pero ligeramente más calmado.</li>
              <li><strong>Valida:</strong> <em>“Veo que estás enojado, es normal cuando algo no sale como esperabas.”</em></li>
              <li><strong>Modela calma:</strong> <em>“Yo estoy tranquilo.”</em></li>
              <li><strong>Opción de salida:</strong> <em>“¿Prefieres dibujar lo que sientes o prefieres hablarlo?”</em></li>
            </ul>
          </div>

          {/* NUEVA SECCIÓN: REFORZADORES */}
          <div className="info-box" style={{ borderLeft: '4px solid #0070bb', paddingLeft: '15px' }}>
            <h3 className="section-title">💡 Reforzadores Recomendados</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>👍 Positivo:</strong> <em>“Gracias por hablarme con esa calma, me ayuda a entenderte mejor.”</em>
              </li>
              <li>
                <strong>🏅 Reconocimiento:</strong> <em>“Ese fue un gran ejercicio de autocontrol. ¡Muy bien hecho!”</em>
              </li>
            </ul>
          </div>

          <div className="info-box" style={{ background: '#f0f9ff', padding: '15px', borderRadius: '15px', marginTop: '20px' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem' }}>📌 Ejemplo práctico</h3>
            <p style={{ fontStyle: 'italic', color: '#475569' }}>
              Un alumno está inquieto y molesto porque no logró terminar una actividad. El docente se acerca, baja el tono, valida su emoción y le ofrece una alternativa: “Veo que estás frustrado, ¿quieres dibujar lo que sientes o prefieres hablarlo?”
            </p>
          </div>

          {/* NUEVA SECCIÓN: CIERRE REFLEXIVO */}
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)', 
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #bae6fd'
          }}>
            <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>🔎 Cierre Reflexivo</h3>
            <p style={{ fontWeight: '500', color: '#0369a1' }}>
              "El camaleón nos enseña que adaptarse no es rendirse, sino encontrar el mejor modo de conectar con el otro sin perder nuestra esencia."
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

export default Camaleon;