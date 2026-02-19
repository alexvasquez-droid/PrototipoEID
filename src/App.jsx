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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Modo invitado para alumnos
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
    window.history.replaceState({}, document.title, "/");
  };

  const compartirConAlumno = () => {
    const urlBase = window.location.origin;
    const mensaje = `Hola, por favor ingresa aquí para completar tu ficha de reflexión: ${urlBase}?mode=invitado`;
    window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  // --- VISTA DE LOGIN ---
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <img src="/cbtis89.webp" alt="Logo CBTIS 89" className="logo-cbtis" />
        <h2 className="titulo-app">Estrategias de intervención en Actitudes Disruptivas</h2>
        <div className="login-box">
          <p className="login-welcome">Bienvenido de nuevo</p>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Correo institucional" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div className="forgot-password"><span onClick={() => alert('Recuperación enviada')}>¿He olvidado mi contraseña?</span></div>
            <button type="submit" className="btn-ingresar">Entrar al Panel</button>
          </form>
          <div className="registro-seccion">
            <p className="social-text">O accede con</p>
            <div className="social-icons">
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RUTAS DE NAVEGACIÓN ---
  if (currentView === 'buho') return <Buho onBack={() => setCurrentView('menu')} />;
  if (currentView === 'camaleon') return <Camaleon onBack={() => setCurrentView('menu')} />;
  if (currentView === 'serpiente') return <Serpiente onBack={() => setCurrentView('menu')} />;
  if (currentView === 'tortuga') return <Tortuga onBack={() => setCurrentView('menu')} />;
  if (currentView === 'caja') return <Caja onBack={() => setCurrentView('menu')} />;
  if (currentView === 'semaforo') return <Semaforo onBack={() => setCurrentView('menu')} />;
  if (currentView === 'especial') return <Especial onBack={() => setCurrentView('menu')} />;

  // --- RENDERIZADO DEL DASHBOARD ---
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <button className="menu-hamburguesa" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
        <div className="user-info-header"><span>👤 Hugo (docente)</span> <span className="bell-icon">🔔</span></div>
      </header>

      {isSidebarOpen && (
        <div className="menu-desplegable shadow-premium">
          <button onClick={() => setIsSidebarOpen(false)}>👤 Mi Perfil</button>
          <button onClick={() => alert('Soporte: soporte@cbtis89.edu.mx')}>🌐 Contacto Técnico</button>
          <div className="menu-divider"></div>
          <button onClick={handleLogout} className="btn-salir">📤 Cerrar Sesión</button>
        </div>
      )}

      <main className="main-content">
        {/* SECCIÓN INTERVENCIÓN */}
        <section className="section-card">
          <h3 className="section-title">✨ Intervención Docente</h3>
          <div className="button-grid">
            <button className="btn-azul" onClick={() => setCurrentView('camaleon')}>🦎 Camaleón</button>
            <button className="btn-azul" onClick={() => setCurrentView('serpiente')}>🐍 Serpiente</button>
            <button className="btn-azul" onClick={() => setCurrentView('tortuga')}>🐢 Tortuga</button>
            <button className="btn-azul" onClick={() => setCurrentView('especial')}>💬 Foro</button>
            <button className="btn-azul-full" onClick={() => setCurrentView('caja')}>🎁 Caja de Sorpresas</button>
            <button className="btn-azul-full" onClick={() => setCurrentView('semaforo')}>🚦 Semáforo (TDAH)</button>
          </div>
        </section>

        {/* SECCIÓN ALUMNO */}
        <section className="section-card student-card">
          <h3 className="section-title">🦉 Rincón del Alumno</h3>
          <div className="student-actions">
            <button className="btn-azul-full" onClick={() => setCurrentView('buho')}>Abrir Ficha Búho</button>
            <button className="btn-verde-whatsapp" onClick={compartirConAlumno}>📲 Compartir por WhatsApp</button>
          </div>
        </section>

        {/* SECCIÓN DESCARGAS (Basada en tu imagen) */}
        <section className="section-card">
          <h3 className="section-title">📁 Recursos Offline</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            {[
              { id: 1, label: 'Plantillas Stickers', file: 'stickers.pdf' },
              { id: 2, label: 'Plantillas Mándalas', file: 'mandalas.pdf' },
              { id: 3, label: 'Plantillas Origami', file: 'origami.pdf' },
              { id: 4, label: 'Técnicas', file: 'tecnicas.pdf' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`/${item.file}`} 
                download 
                className="btn-download"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                <div className="download-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="24" />
                </div>
                <div className="download-text">
                  <strong style={{ fontSize: '0.9rem' }}>{item.label}</strong>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;