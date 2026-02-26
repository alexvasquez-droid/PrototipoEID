import React, { useState, useEffect } from 'react';
import './App.css';
import Buho from './Buho';
import Camaleon from './Camaleon';
import Serpiente from './Serpiente';
import Tortuga from './Tortuga';
import Caja from './Caja';
import Semaforo from './Semaforo';
import Especial from './Especial';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('menu'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // NOTIFICACIONES SIMULADAS DETALLADAS (Manteniendo nombres de alumnos)
  const [notifications] = useState([
    { id: 1, student: "Juan Pérez", group: "2ºA", time: "Hace 5 min", type: "Búho", icon: "🦉" },
    { id: 2, student: "María García", group: "4ºC", time: "Hace 20 min", type: "Búho", icon: "🦉" },
    { id: 3, student: "Carlos Ruiz", group: "6ºB", time: "Ayer", type: "Búho", icon: "🦉" }
  ]);

  // ESTADOS DEL FORO (Funcionalidad completa)
  const [posts, setPosts] = useState([
    { id: 1, user: "Mtra. Elena", text: "La técnica del Camaleón me funcionó excelente con 2º B.", likes: 4, date: "Hoy" },
    { id: 2, user: "Prof. Ricardo", text: "¿Alguien tiene tips para alumnos muy apáticos?", likes: 2, date: "Ayer" }
  ]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'invitado') {
      setCurrentView('buho');
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "cbtis89@dgeti.com" && password === "contraseña") {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSidebarOpen(false);
    setCurrentView('menu');
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const compartirConAlumno = () => {
    const urlInvitado = `${window.location.origin}${window.location.pathname}?mode=invitado`;
    const mensaje = `Hola, por favor realiza tu reflexión en el Rincón del Búho aquí: ${urlInvitado}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const agregarPost = () => {
    if (newPost.trim()) {
      const post = { id: Date.now(), user: "Tú (Docente)", text: newPost, likes: 0, date: "Ahora" };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  const darLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  // RENDERIZADO DE VISTAS TÉCNICAS
  if (currentView === 'buho') return <Buho onBack={() => setCurrentView('menu')} />;
  if (currentView === 'camaleon') return <Camaleon onBack={() => setCurrentView('menu')} />;
  if (currentView === 'serpiente') return <Serpiente onBack={() => setCurrentView('menu')} />;
  if (currentView === 'tortuga') return <Tortuga onBack={() => setCurrentView('menu')} />;
  if (currentView === 'caja') return <Caja onBack={() => setCurrentView('menu')} />;
  if (currentView === 'semaforo') return <Semaforo onBack={() => setCurrentView('menu')} />;
  if (currentView === 'especial') return <Especial onBack={() => setCurrentView('menu')} />;
  
  // VISTA DEL FORO INDEPENDIENTE
  if (currentView === 'foro') return (
    <div className="main-content">
      <header style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <button className="btn-azul" onClick={() => setCurrentView('menu')} style={{ padding: '10px 15px' }}>←</button>
        <h2 style={{ color: 'var(--primary)', margin: 0 }}>Comunidad Docente</h2>
      </header>
      <div className="section-card" style={{ marginBottom: '20px' }}>
        <textarea className="input-field" placeholder="Comparte una experiencia o duda..." value={newPost} onChange={(e) => setNewPost(e.target.value)} style={{ marginBottom: '10px', height: '80px' }} />
        <button className="btn-azul-full" onClick={agregarPost}>Publicar en el Foro</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} className="section-card" style={{ padding: '15px', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--primary)' }}>{post.user}</strong>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{post.date}</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '10px' }}>{post.text}</p>
            <button onClick={() => darLike(post.id)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>❤️ {post.likes} me gusta</button>
          </div>
        ))}
      </div>
    </div>
  );

  // VISTA DE LOGIN (Restaurada con Google y Olvidé contraseña)
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <img src="/cbtis89.webp" alt="Logo" className="logo-cbtis" />
        <h2 className="titulo-app">Estrategias de intervención en Actitudes Disruptivas</h2>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Correo institucional" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <a href="#" style={{ color: 'var(--primary)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '600' }}>He olvidado mi contraseña</a>
            </div>
            <button type="submit" className="btn-ingresar">Entrar al Panel</button>
          </form>
          <div style={{ margin: '25px 0', display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
            <span style={{ padding: '0 15px' }}>o accede con</span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn-social" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 40px' }}>
              <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" width="20" /> Google
            </button>
          </div>
          <p style={{ marginTop: '30px', fontSize: '0.85rem', color: '#64748b' }}>© 2026 CBTIS 89 - Departamento de Orientación</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* HEADER: CAMPANA + NOMBRE USUARIO */}
      <header className="dash-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '70px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative' }}>
        <button className="menu-hamburguesa" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? '✕' : '☰'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setIsNotifOpen(!isNotifOpen)}>
            <span style={{ fontSize: '22px' }}>🔔</span>
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#ef4444', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>3</span>
            {isNotifOpen && (
              <div className="section-card" style={{ position: 'absolute', top: '45px', right: '0', width: '300px', zIndex: 300, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', padding: '15px', background: 'white', borderRadius: '15px' }}>
                <h4 style={{ marginBottom: '12px', fontSize: '0.9rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', color: 'var(--primary)' }}>Actividad de Estudiantes</h4>
                {notifications.map(n => (
                  <div key={n.id} style={{ padding: '10px 0', borderBottom: '1px solid #f8fafc', fontSize: '0.85rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px' }}>{n.icon}</span>
                    <div>
                      <strong style={{ color: '#1e293b' }}>{n.student}</strong> <span style={{ color: '#64748b' }}>({n.group})</span>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Ficha del {n.type} • {n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="user-info-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span style={{ fontWeight: '600', color: '#334155' }}>👤 Hugo (docente)</span>
          </div>
        </div>
      </header>

      {/* SIDEBAR: INICIO, PERFIL, CONFIGURACIÓN, CERRAR SESIÓN */}
      {isSidebarOpen && (
        <div className="menu-desplegable">
          <button onClick={() => { setCurrentView('menu'); setIsSidebarOpen(false); }}>🏠 Inicio</button>
          <button onClick={() => { setIsSidebarOpen(false); }}>👤 Mi Perfil</button>
          <button onClick={() => { setIsSidebarOpen(false); }}>⚙️ Configuración</button>
          <hr style={{ border: '0.5px solid #f1f5f9', margin: '5px 0' }} />
          <button onClick={handleLogout} style={{ color: '#ef4444' }}>🚪 Cerrar Sesión</button>
        </div>
      )}

      <main className="main-content">
        {/* SECCIÓN FORO DESTACADA */}
        <section className="section-card" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)', border: '1px dashed var(--primary)', padding: '20px', marginBottom: '25px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '32px' }}>💬</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, color: 'var(--primary)', fontWeight: '800' }}>Foro de Discusión</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Comparte experiencias con otros maestros.</p>
            </div>
            <button className="btn-azul" onClick={() => setCurrentView('foro')} style={{ padding: '10px 20px', borderRadius: '12px' }}>Ir al Foro</button>
          </div>
        </section>

        {/* INTERVENCIÓN DOCENTE */}
        <section className="section-card">
          <h3 className="section-title">✨ Intervención Docente</h3>
          <div className="button-grid">
            <button className="btn-azul" onClick={() => setCurrentView('camaleon')}>🦎 Camaleón</button>
            <button className="btn-azul" onClick={() => setCurrentView('serpiente')}>🐍 Serpiente</button>
            <button className="btn-azul" onClick={() => setCurrentView('tortuga')}>🐢 Tortuga</button>
            <button className="btn-azul" onClick={() => setCurrentView('semaforo')}>🚦 Semáforo</button>
            <button className="btn-azul-full" onClick={() => setCurrentView('caja')}>🎁 Caja de Sorpresas</button>
          </div>
        </section>

        {/* ALUMNO: BADGE ESTILIZADO Y TEXTO REUBICADO */}
        <section className="section-card student-card">
          <div style={{ 
            display: 'inline-block', 
            backgroundColor: '#e0f2fe', 
            color: '#0070bb', 
            padding: '4px 12px', 
            borderRadius: '8px', 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            border: '1px solid #bae6fd',
            marginBottom: '10px'
          }}>
            ALUMNO
          </div>
          <h3 className="section-title">🦉 Rincón del Alumno</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="btn-azul-full" onClick={() => setCurrentView('buho')}>Abrir Técnica del Búho</button>
            
            {/* Texto entre botones */}
            <p style={{ color: '#64748b', margin: '5px 0', fontSize: '0.9rem', textAlign: 'center' }}>
              Comparte este enlace para que el alumno reflexione.
            </p>
            
            <button className="btn-verde-whatsapp" onClick={compartirConAlumno}>📲 Compartir por WhatsApp</button>
          </div>
        </section>

        {/* SECCIÓN DESCARGAS COMPLETA */}
        <section className="section-card">
          <h3 className="section-title">📁 Recursos Offline</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            {[
              { id: 1, label: 'Plantillas Stickers', file: 'stickers.pdf' },
              { id: 2, label: 'Plantillas Mándalas', file: 'mandalas.pdf' },
              { id: 3, label: 'Plantillas Origami', file: 'origami.pdf' },
              { id: 4, label: 'Técnicas', file: 'tecnicas.pdf' }
            ].map((item) => (
              <a key={item.id} href={`/${item.file}`} download className="btn-download" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <div className="download-icon"><img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="24" /></div>
                <div className="download-text">
                  <strong style={{ display: 'block', color: '#334155' }}>{item.label}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>PDF descargable</span>
                </div>
                <div style={{ marginLeft: 'auto', color: '#cbd5e1' }}>⬇️</div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;