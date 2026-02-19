import React from 'react';

const Tortuga = ({ onBack }) => {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>Técnica: La Tortuga</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '60px' }}>🐢</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Técnica de la Tortuga</h2>
          </div>

          <div className="info-box">
            <h3 className="section-title">📖 ¿Qué es?</h3>
            <p>Inspirada en el movimiento lento y protector de la tortuga, enseña al alumno a retirarse emocionalmente cuando se siente abrumado, permitiéndole desarrollar su autocontrol antes de actuar.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🎯 Objetivo</h3>
            <p>Ayudar al alumno a reconocer emociones intensas y protegerse de conductas impulsivas mediante una pausa consciente.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🧭 El Proceso (Caparazón)</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Protección:</strong> Bajar la cabeza, cruzar brazos y cerrar los ojos (entrar al caparazón).</li>
              <li><strong>Respiración:</strong> Inhalar profundo mientras se piensa en la situación con calma.</li>
              <li><strong>Comunicación:</strong> Usar frases como <em>“necesito espacio”</em> o <em>“quiero estar solo un momento”</em>.</li>
              <li><strong>Retorno:</strong> Salir del caparazón diciendo <em>“ya estoy listo”</em> o <em>“me siento mejor”</em>.</li>
            </ul>
          </div>

          <div className="info-box" style={{ borderLeft: '4px solid #0070bb', paddingLeft: '15px' }}>
            <h3 className="section-title">💡 Reforzadores Recomendados</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>🎯 De Esfuerzo:</strong> <em>“Te esforzaste mucho en aplicar la técnica hoy.”</em></li>
              <li style={{ marginBottom: '10px' }}><strong>🏅 De Logro:</strong> <em>“Lograste calmarte por ti mismo, ¡muy bien!”</em></li>
              <li><strong>❤️ De Afecto:</strong> <em>“Estoy muy orgulloso de cómo te cuidaste.”</em></li>
            </ul>
          </div>

          <div className="info-box" style={{ background: '#fefce8', padding: '15px', borderRadius: '15px', marginTop: '20px', border: '1px solid #fef08a' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem' }}>📌 Ejemplo práctico</h3>
            <p style={{ fontStyle: 'italic', color: '#854d0e' }}>
              <strong>Alumno:</strong> “¡Estoy enojado, quiero gritar!” <br/>
              <strong>Docente:</strong> “Recuerda tu caparazón, ¿lo usamos?” <br/>
              <strong>Alumno:</strong> (Aplica los pasos) ... “Ya estoy listo.” <br/>
              <strong>Docente:</strong> “¡Excelente manejo! Estoy orgulloso de ti.”
            </p>
          </div>

          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: 'linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)', 
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #fde68a'
          }}>
            <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>🔎 Cierre Reflexivo</h3>
            <p style={{ fontWeight: '500', color: '#92400e' }}>
              "La tortuga nos enseña que retirarse a tiempo no es huir, sino protegerse para volver con más calma y claridad."
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

export default Tortuga;