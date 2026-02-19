import React from 'react';

const Semaforo = ({ onBack }) => {
  const shareUrl = () => {
    const mensaje = "Hola, te comparto la Técnica del Semáforo con Origami para alumnos con TDAH: https://tusitio.com/semaforo";
    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>Técnica: Semáforo (TDAH)</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in" style={{ borderTop: '8px solid #ef4444' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '60px' }}>🚦</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Semáforo con Origami</h2>
            <p style={{ color: '#64748b', fontWeight: '600' }}>Especial para TDAH</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">📖 ¿Qué es?</h3>
            <p>Utiliza un sistema visual de tres colores para identificar el estado emocional y de concentración, combinado con <strong>pausas activas de origami</strong> para canalizar la energía.</p>
          </div>

          <div className="info-box">
            <h3 className="section-title">🎯 Objetivo</h3>
            <p>Favorecer la autorregulación emocional y la concentración mediante un sistema visual sencillo y actividades manuales creativas.</p>
          </div>

          <div className="info-box" style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px' }}>
            <h3 className="section-title">📝 Significado de los Colores</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>🟥</span>
                <div><strong>Rojo – “Necesito parar”:</strong> Pausa breve con origami sencillo (barquito o avión).</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>🟨</span>
                <div><strong>Amarillo – “Me distraigo”:</strong> Origami rápido (estrella o corazón) para recuperar el foco.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>🟩</span>
                <div><strong>Verde – “Concentrado”:</strong> Seguir trabajando; origami como recompensa al final.</div>
              </div>
            </div>
          </div>

          <div className="button-grid" style={{ marginTop: '20px' }}>
            <div className="info-box" style={{ border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0070bb', marginBottom: '5px' }}>👩‍🏫 Docente</h4>
              <p style={{ fontSize: '0.9rem' }}>Provee papel, guía con instrucciones simples y refuerza el uso del semáforo.</p>
            </div>
            <div className="info-box" style={{ border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0070bb', marginBottom: '5px' }}>🧑‍🎓 Alumno</h4>
              <p style={{ fontSize: '0.9rem' }}>Identifica su estado, realiza la pausa y guarda su figura como símbolo de logro.</p>
            </div>
          </div>

          <div className="info-box" style={{ background: '#f0f9ff', padding: '15px', borderRadius: '15px', marginTop: '20px', border: '1px solid #bae6fd' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem' }}>📌 Ejemplo práctico</h3>
            <p style={{ fontStyle: 'italic', color: '#1e40af' }}>
              El alumno pone el semáforo en <strong>rojo</strong>. El docente le da una hoja y doblan un barquito. Tras 3 minutos, el alumno cambia a <strong>verde</strong> y retoma su tarea con más calma.
            </p>
          </div>

          <div className="student-actions" style={{ marginTop: '30px' }}>
             <button className="btn-verde-whatsapp" onClick={shareUrl}>📲 Compartir Técnica</button>
             <button className="btn-azul-full" onClick={onBack}>Volver al Panel</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Semaforo;