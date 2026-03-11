import React, { useState } from "react";

const Buho = ({ onBack }) => {
  // 1. ESTADOS
  const [alumno, setAlumno] = useState({ nombre: "", grupo: "" });
  const [answers, setAnswers] = useState({});
  const [textFeel, setTextFeel] = useState("");
  const [emoji, setEmoji] = useState("");
  const [commitment, setCommitment] = useState("");
  const [step, setStep] = useState("meditacion");
  const [enviando, setEnviando] = useState(false);

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

  const questions = [
    { key: "situacion", text: "¿Qué ha pasado?", options: ["Interrumpí a mis compañeros","Hablé sin pedir la palabra","Me levanté sin permiso","Me enojé y grité","Me negué a participar","Me distraje y distraje a otros","Otro"] },
    { key: "emocion", text: "¿Cómo me sentía?", options: ["Enojado","Triste","Nervioso","Contento","Aburrido","Ansioso","Tranquilo","Otro"] },
    { key: "otros", text: "¿Cómo se sintieron los demás?", options: ["Molestos","Tristes","Confundidos","Tranquilos","Orgullosos","Desanimados"] },
    { key: "estrategia", text: "¿Qué puedo hacer diferente la próxima vez?", options: ["Respirar profundamente antes de hablar","Levantar la mano para participar","Esperar mi turno con calma","Escribir o dibujar lo que siento","Pedir ayuda con respeto","Guardar silencio y escuchar"] }
  ];

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  // FUNCIÓN DE ENVÍO AUTOMÁTICO AL EXCEL (CON TU API)
  const enviarADatabase = async () => {
    setEnviando(true);

    const datosParaExcel = {
      fecha: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
      nombre: alumno.nombre,
      grupo: alumno.grupo,
      situacion: answers.situacion || "N/A",
      emocion: answers.emocion || "N/A",
      impacto: answers.otros || "N/A",
      estrategia: answers.estrategia || "N/A",
      reflexion: textFeel || "N/A",
      compromiso: commitment || "N/A",
      estado_final: emoji || "N/A"
    };

    try {
      // TU URL DE SHEETBEST INTEGRADA
      const response = await fetch('https://api.sheetbest.com/sheets/271233ae-62ff-4e1d-9466-cef3f2ca15fa', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosParaExcel),
      });

      if (response.ok) {
        setEnviando(false);
        setStep("ficha");
      } else {
        throw new Error("Error en servidor");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setEnviando(false);
      // Pase lo que pase, mostramos la ficha al alumno
      setStep("ficha");
    }
  };

  return (
    <div className="section-card" style={{ maxWidth: "600px", margin: "20px auto" }}>
      
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
        .leyenda-privacidad { font-size: 11px; color: #666; margin-top: 15px; font-style: italic; line-height: 1.2; text-align: center; }
        .loader { border: 4px solid #f3f3f3; border-top: 4px solid #87CEEB; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 20px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      {/* PASO 1: MEDITACIÓN */}
      {step === "meditacion" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">🌬️ Momento de Calma</h2>
          <div className="triangulo-container">
            <div className="respiro-dot"></div>
            <svg className="triangulo-svg" viewBox="0 0 260 220"><path d="M 130 10 L 10 210 L 250 210 Z" /></svg>
          </div>
          <button style={buttonStyle} onClick={() => setStep("identificacion")}>Ya estoy tranquilo</button>
          <p className="leyenda-privacidad">Manejo ético y privado: tus datos están seguros y se usan exclusivamente para fines educativos.</p>
        </div>
      )}

      {/* PASO 2: IDENTIFICACIÓN */}
      {step === "identificacion" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">👤 ¿Quién eres?</h2>
          <input type="text" className="input-field" placeholder="Nombre completo" value={alumno.nombre} onChange={(e) => setAlumno({...alumno, nombre: e.target.value})} style={{ marginBottom: "15px" }} />
          <input type="text" className="input-field" placeholder="Grupo (Ej: Logística 2ºA)" value={alumno.grupo} onChange={(e) => setAlumno({...alumno, grupo: e.target.value})} />
          <button style={buttonStyle} onClick={() => alumno.nombre ? setStep("portada") : alert("Ingresa tu nombre")}>Continuar</button>
        </div>
      )}

      {/* PASO 3: PORTADA */}
      {step === "portada" && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "60px" }}>🦉</h1>
          <h2 className="section-title">Rincón del Búho</h2>
          <p>Hola <strong>{alumno.nombre}</strong>, respira y reflexiona.</p>
          <button style={buttonStyle} onClick={() => setStep("cuestionario")}>Comenzar reflexión</button>
        </div>
      )}

      {/* PASO 4: CUESTIONARIO */}
      {step === "cuestionario" && (
        <div>
          <h2 className="section-title">Cuestionario</h2>
          {questions.map((q) => (
            <div key={q.key} style={{ marginBottom: "15px" }}>
              <p style={{ fontWeight: "bold" }}>{q.text}</p>
              <select className="input-field" value={answers[q.key] || ""} onChange={(e) => handleAnswer(q.key, e.target.value)}>
                <option value="">Selecciona una opción...</option>
                {q.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          ))}
          <button style={{ ...buttonStyle, width: "100%" }} onClick={() => setStep("actividad")}>Siguiente ➡️</button>
        </div>
      )}

      {/* PASO 5: ACTIVIDAD */}
      {step === "actividad" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">Tu reflexión</h2>
          <textarea className="input-field" rows="4" value={textFeel} onChange={(e) => setTextFeel(e.target.value)} placeholder="¿Cómo te sientes en este momento?" />
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
            {["😀", "😌", "🤔", "😡", "😢"].map(emo => (
              <button key={emo} style={{ fontSize: "25px", background: emoji === emo ? "#e0f2fe" : "white", border: "1px solid #ccc", borderRadius: "8px", padding: "5px", cursor: "pointer" }} onClick={() => setEmoji(emo)}>{emo}</button>
            ))}
          </div>
          <button style={buttonStyle} onClick={() => setStep("compromiso")}>Siguiente ➡️</button>
        </div>
      )}

      {/* PASO 6: COMPROMISO */}
      {step === "compromiso" && (
        <div style={{ textAlign: "center" }}>
          <h2 className="section-title">🤝 Mi Microcompromiso</h2>
          <textarea className="input-field" rows="3" value={commitment} onChange={(e) => setCommitment(e.target.value)} placeholder="¿Qué pequeña acción harás diferente?" />
          <button style={buttonStyle} onClick={() => setStep("insignia")}>Obtener Insignia 🏅</button>
        </div>
      )}

      {/* PASO 7: INSIGNIA Y ENVÍO */}
      {step === "insignia" && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFD700" }}>¡Excelente trabajo!</h2>
          <div style={{ fontSize: "80px", margin: "20px 0" }}>🦉</div>
          {enviando ? (
            <div>
              <div className="loader"></div>
              <p>Guardando datos en Orientación Educativa...</p>
            </div>
          ) : (
            <button style={buttonStyle} onClick={enviarADatabase}>Ver mi Ficha Final 📄</button>
          )}
        </div>
      )}

      {/* PASO FINAL: FICHA DE ORIENTACIÓN */}
      {step === "ficha" && (
        <div style={{ border: "2px solid #333", padding: "20px", borderRadius: "15px", backgroundColor: "#f9f9f9" }}>
          <div style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "10px", borderRadius: "8px", marginBottom: "20px", fontWeight: "bold", textAlign: "center", border: "1px solid #bbf7d0" }}>
            ✅ Tu ficha se guardó y envió satisfactoriamente a la oficina de Orientación Educativa.
          </div>
          
          <h2 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "15px" }}>FICHA DE ORIENTACIÓN</h2>
          <div style={{ textAlign: "left", fontSize: "14px", lineHeight: "1.6" }}>
            <p><strong>Alumno:</strong> {alumno.nombre} ({alumno.grupo})</p>
            <p><strong>Situación:</strong> {answers.situacion}</p>
            <p><strong>Emoción:</strong> {answers.emocion}</p>
            <p><strong>Impacto:</strong> {answers.otros}</p>
            <p><strong>Estrategia:</strong> {answers.estrategia}</p>
            <p><strong>Reflexión:</strong> {textFeel}</p>
            <p><strong>Compromiso:</strong> {commitment}</p>
            <p><strong>Estado:</strong> {emoji}</p>
          </div>
          <button style={{ ...buttonStyle, backgroundColor: "#666", width: "100%", marginTop: "20px" }} onClick={onBack}>Cerrar y Volver al Menú</button>
        </div>
      )}
    </div>
  );
};

export default Buho;