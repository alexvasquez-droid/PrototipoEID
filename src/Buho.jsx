import React, { useState } from "react";

const Buho = ({ onBack }) => {
  // 1. ESTADOS (Mantenemos tu lógica original e integramos los nuevos)
  const [alumno, setAlumno] = useState({ nombre: "", grupo: "" });
  const [answers, setAnswers] = useState({});
  const [textFeel, setTextFeel] = useState("");
  const [drawing, setDrawing] = useState(null);
  const [emoji, setEmoji] = useState("");
  const [commitment, setCommitment] = useState("");
  const [step, setStep] = useState("meditacion"); // Paso inicial: Meditación

  // Tu estilo de botón original
  const buttonStyle = {
    backgroundColor: "#87CEEB",
    color: "white",
    border: "none",
    padding: "10px 20px",
    marginTop: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.3s"
  };

  // Tus preguntas originales (Estructura para selectores)
  const questions = [
    { key: "situacion", text: "¿Qué ha pasado?", options: ["Interrumpí a mis compañeros","Hablé sin pedir la palabra","Me levanté sin permiso","Me enojé y grité","Me negué a participar","Me distraje y distraje a otros","Otro"] },
    { key: "emocion", text: "¿Cómo me sentía?", options: ["Enojado","Triste","Nervioso","Contento","Aburrido","Ansioso","Tranquilo","Otro"] },
    { key: "otros", text: "¿Cómo se sintieron los demás?", options: ["Molestos","Tristes","Confundidos","Tranquilos","Orgullosos","Desanimados"] },
    { key: "estrategia", text: "¿Qué puedo hacer diferente la próxima vez?", options: ["Respirar profundamente antes de hablar","Levantar la mano para participar","Esperar mi turno con calma","Escribir o dibujar lo que siento","Pedir ayuda con respeto","Guardar silencio y escuchar"] }
  ];

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  // Validaciones originales para habilitar botones
  const cuestionarioCompleto = questions.every((q) => answers[q.key] && answers[q.key] !== "");
  const actividadCompleta = textFeel.trim() !== "" || drawing !== null || emoji !== "";
  const compromisoCompleto = commitment.trim() !== "";

  // Ficha de WhatsApp (Personalizada con los nuevos campos)
  const fichaTexto = `*FICHA DE REFLEXIÓN - CBTIS 89*\n🦉 Rincón del Búho\n---------------------------\n👤 Alumno: ${alumno.nombre}\n👥 Grupo: ${alumno.grupo}\n---------------------------\n❓ Situación: ${answers.situacion}\n🎭 Emoción: ${answers.emocion}\n👥 Otros: ${answers.otros}\n💡 Estrategia: ${answers.estrategia}\n📝 Reflexión: ${textFeel}\n🤝 Compromiso: ${commitment}\n✨ Estado final: ${emoji}`;

  return (
    <div className="section-card" style={{ maxWidth: "600px", margin: "20px auto" }}>
      
      {/* Estilos del triángulo animado inyectados */}
      <style>{`
        .triangulo-container { position: relative; width: 260px; height: 220px; margin: 40px auto; }
        .triangulo-svg { width: 100%; height: 100%; fill: none; stroke: #87CEEB; stroke-width: 6; stroke-linecap: round; }
        .respiro-dot { 
          position: absolute; width: 22px; height: 22px; background: #87CEEB; border-radius: 50%; 
          offset-path: path('M 130 10 L 10 210 L 250 210 Z'); 
          animation: moveDot 12s infinite linear; box-shadow: 0 0 15px #87CEEB;
        }
        @keyframes moveDot { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
        .guia-texto { position: absolute; font-weight: 800; color: #0070bb; font-size: 12px; }
      `}</style>

      {/* PASO: MEDITACIÓN */}
      {step === "meditacion" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">🌬️ Momento de Calma</h2>
          <p>Sigue el punto azul con tu respiración para tranquilizarte.</p>
          <div className="triangulo-container">
            <div className="respiro-dot"></div>
            <svg className="triangulo-svg" viewBox="0 0 260 220">
              <path d="M 130 10 L 10 210 L 250 210 Z" />
            </svg>
            <div className="guia-texto" style={{ top: '-20px', left: '100px' }}>INHALA</div>
            <div className="guia-texto" style={{ bottom: '-25px', left: '105px' }}>SOSTÉN</div>
            <div className="guia-texto" style={{ top: '100px', right: '-15px' }}>EXHALA</div>
          </div>
          <button style={buttonStyle} onClick={() => setStep("identificacion")}>Ya estoy tranquilo</button>
        </div>
      )}

      {/* PASO: IDENTIFICACIÓN */}
      {step === "identificacion" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">👤 ¿Quién eres?</h2>
          <input 
            type="text" className="input-field" placeholder="Nombre completo" 
            value={alumno.nombre} onChange={(e) => setAlumno({...alumno, nombre: e.target.value})} 
            style={{ marginBottom: "15px" }}
          />
          <input 
            type="text" className="input-field" placeholder="Grupo (Ej: 2ºA)" 
            value={alumno.grupo} onChange={(e) => setAlumno({...alumno, grupo: e.target.value})} 
          />
          <button style={buttonStyle} onClick={() => alumno.nombre ? setStep("portada") : alert("Por favor, ingresa tu nombre")}>
            Continuar
          </button>
        </div>
      )}

      {/* PASO 1: PORTADA ORIGINAL */}
      {step === "portada" && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>🦉</h1>
          <h2 className="section-title">Rincón del Búho</h2>
          <p>Hola <strong>{alumno.nombre}</strong>, este espacio es para pensar con calma y encontrar respuestas sabias.</p>
          <button style={buttonStyle} onClick={() => setStep("cuestionario")}>Comenzar mi reflexión</button>
        </div>
      )}

      {/* PASO 2: CUESTIONARIO (Selectores agrupados) */}
      {step === "cuestionario" && (
        <div>
          <h2 className="section-title">Cuestionario de reflexión</h2>
          {questions.map((q) => (
            <div key={q.key} style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>{q.text}</p>
              <select
                className="input-field"
                style={{ padding: "12px", width: "100%", borderRadius: "12px" }}
                value={answers[q.key] || ""}
                onChange={(e) => handleAnswer(q.key, e.target.value)}
              >
                <option value="">Selecciona una opción...</option>
                {q.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          ))}
          <button 
            style={{ ...buttonStyle, width: "100%", opacity: cuestionarioCompleto ? 1 : 0.5 }} 
            disabled={!cuestionarioCompleto} 
            onClick={() => setStep("actividad")}
          >
            Siguiente: Actividad ➡️
          </button>
        </div>
      )}

      {/* PASO 3: ACTIVIDAD (Reflexión, Dibujo y Emoji) */}
      {step === "actividad" && (
        <div>
          <h2 className="section-title">Actividad reflexiva</h2>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold" }}>✍️ Cuéntame cómo te sientes ahora:</p>
            <textarea
              className="input-field" rows="4"
              value={textFeel} onChange={(e) => setTextFeel(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold" }}>🎨 Opcional: Sube un dibujo o mandala:</p>
            <input type="file" accept="image/*" onChange={(e) => setDrawing(e.target.files[0]?.name ?? null)} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>🖼️ Selecciona un emoji que te represente:</p>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "10px" }}>
              {["😀", "😢", "😡", "😌", "🤔"].map((emo) => (
                <button
                  key={emo}
                  style={{ fontSize: "30px", background: emoji === emo ? "#e0f2fe" : "transparent", border: emoji === emo ? "2px solid #87CEEB" : "1px solid #ddd", borderRadius: "12px", cursor: "pointer", padding: "10px" }}
                  onClick={() => setEmoji(emo)}
                >
                  {emo}
                </button>
              ))}
            </div>
          </div>
          <button style={{ ...buttonStyle, width: "100%", opacity: actividadCompleta ? 1 : 0.5 }} disabled={!actividadCompleta} onClick={() => setStep("compromiso")}>
            Siguiente: Compromiso ➡️
          </button>
        </div>
      )}

      {/* PASO 4: COMPROMISO ORIGINAL */}
      {step === "compromiso" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">🤝 Mi Microcompromiso</h2>
          <p>¿Qué pequeña acción harás para mejorar la próxima vez?</p>
          <textarea
            className="input-field" rows="3"
            value={commitment} onChange={(e) => setCommitment(e.target.value)}
            style={{ marginTop: "15px" }}
          />
          <button 
            style={{ ...buttonStyle, width: "100%", opacity: compromisoCompleto ? 1 : 0.5 }} 
            disabled={!compromisoCompleto} 
            onClick={() => setStep("insignia")}
          >
            Obtener mi Insignia 🏅
          </button>
        </div>
      )}

      {/* PASO 5: INSIGNIA ORIGINAL */}
      {step === "insignia" && (
        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <h2 style={{ color: "#FFD700", fontSize: "28px" }}>¡Felicidades!</h2>
          <div style={{ fontSize: "100px", margin: "20px 0" }}>🦉</div>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Insignia: Sabiduría del Búho</p>
          <button style={{ ...buttonStyle, marginTop: "30px" }} onClick={() => setStep("ficha")}>Ver mi Ficha Final 📄</button>
        </div>
      )}

      {/* PASO 6: FICHA FINAL (Estilo subrayado original) */}
      {step === "ficha" && (
        <div style={{ border: "2px solid #333", padding: "20px", borderRadius: "15px", backgroundColor: "#f9f9f9" }}>
          <h2 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "20px" }}>FICHA DE ORIENTACIÓN</h2>
          <div style={{ lineHeight: "2" }}>
            <p><strong>Alumno:</strong> {alumno.nombre} ({alumno.grupo})</p>
            <p><strong>Situación:</strong> {answers.situacion}</p>
            <p><strong>Emoción:</strong> {answers.emocion}</p>
            <p><strong>Estrategia:</strong> {answers.estrategia}</p>
            <p><strong>Reflexión:</strong> {textFeel}</p>
            <p><strong>Estado final:</strong> {emoji}</p>
            <p><strong>Compromiso:</strong> {commitment}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "30px" }}>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(fichaTexto)}`} 
              target="_blank" rel="noopener noreferrer" 
              className="btn-verde-whatsapp" style={{ textDecoration: "none" }}
            >
              📲 Enviar por WhatsApp
            </a>
            <button style={{ ...buttonStyle, backgroundColor: "#666" }} onClick={onBack}>Cerrar y Volver</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Buho;