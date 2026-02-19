import React, { useState } from 'react';

const Especial = ({ onBack }) => {
  const [sugerencias, setSugerencias] = useState([
    { id: 1, autor: "Mtra. Elena", titulo: "Técnica del Espejo", desc: "Para trabajar empatía en conflictos de pareja.", likes: 12 },
    { id: 2, autor: "Prof. Ricardo", titulo: "El Semáforo Grupal", desc: "Variante para controlar el ruido en todo el salón.", likes: 8 }
  ]);

  const [nuevaSugerencia, setNuevaSugerencia] = useState({ titulo: '', desc: '' });

  const enviarSugerencia = (e) => {
    e.preventDefault();
    if (nuevaSugerencia.titulo && nuevaSugerencia.desc) {
      const nueva = {
        id: Date.now(),
        autor: "Hugo (Docente)", 
        titulo: nuevaSugerencia.titulo,
        desc: nuevaSugerencia.desc,
        likes: 0
      };
      setSugerencias([nueva, ...sugerencias]);
      setNuevaSugerencia({ titulo: '', desc: '' });
    }
  };

  const darLike = (id) => {
    setSugerencias(sugerencias.map(s => 
      s.id === id ? { ...s, likes: s.likes + 1 } : s
    ));
  };

  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={onBack}>⬅</button>
        <div className="user-info-header">
          <span>🧩 Muro de Ideas</span>
        </div>
      </header>

      <main className="main-content">
        <div className="section-card animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <span style={{ fontSize: '60px' }}>💡</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Muro de Ideas Docentes</h2>
            <p style={{ color: '#64748b' }}>Comparte técnicas que te han funcionado en el CBTIS 89.</p>
          </div>

          {/* FORMULARIO DE APORTACIÓN */}
          <form onSubmit={enviarSugerencia} className="info-box" style={{ background: '#f8fafc', border: '2px dashed #cbd5e1' }}>
            <h3 className="section-title" style={{ fontSize: '1.1rem', marginBottom: '15px' }}>✨ ¡Aporta una nueva idea!</h3>
            <input 
              type="text" 
              placeholder="Nombre de tu técnica..." 
              className="input-field" 
              value={nuevaSugerencia.titulo}
              onChange={(e) => setNuevaSugerencia({...nuevaSugerencia, titulo: e.target.value})}
              required
            />
            <textarea 
              placeholder="¿Cómo la aplicas y qué resultados tuviste?" 
              className="input-field" 
              rows="3"
              value={nuevaSugerencia.desc}
              onChange={(e) => setNuevaSugerencia({...nuevaSugerencia, desc: e.target.value})}
              style={{ resize: 'none', marginTop: '10px' }}
              required
            ></textarea>
            <button type="submit" className="btn-azul-full" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', marginTop: '10px' }}>
              Publicar en el Muro
            </button>
          </form>

          <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #f1f5f9' }} />

          {/* LISTA DE IDEAS COMPARTIDAS */}
          <h3 className="section-title">🌟 Ideas de la Comunidad</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {sugerencias.map((item) => (
              <div key={item.id} className="info-box shadow-premium" style={{ borderLeft: '6px solid #6366f1', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <strong style={{ color: '#4f46e5', fontSize: '1.1rem' }}>{item.titulo}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', background: '#f1f5f9', padding: '4px 8px', borderRadius: '8px' }}>
                    Por: {item.autor}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '10px', lineHeight: '1.5' }}>{item.desc}</p>
                
                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => darLike(item.id)}
                    style={{ 
                      background: '#fff1f2', 
                      border: '1px solid #fecdd3', 
                      borderRadius: '20px', 
                      padding: '5px 12px', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: '0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <span style={{ color: '#e11d48' }}>❤️</span> 
                    <strong style={{ color: '#e11d48' }}>{item.likes}</strong>
                  </button>
                  <small style={{ color: '#94a3b8' }}>docentes apoyan esta idea</small>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-azul-full" onClick={onBack} style={{ marginTop: '40px' }}>
            Volver al Panel Principal
          </button>
        </div>
      </main>
    </div>
  );
};

export default Especial;