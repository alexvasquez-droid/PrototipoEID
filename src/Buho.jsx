import React, { useState } from "react";

const Buho = ({ onBack }) => {
  const [answers, setAnswers] = useState({});
  const [textFeel, setTextFeel] = useState("");
  const [drawing, setDrawing] = useState(null);
  const [emoji, setEmoji] = useState("");
  const [commitment, setCommitment] = useState("");
  const [step, setStep] = useState("portada");

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
    { key: "otros", text: "¿Cómo se sintieron los demás?", options: ["Molestos","Tristes","Confundidos","Tranquilos","Orgullosos","Desanimados","Otro"] },
    { key: "estrategia", text: "¿Qué puedo hacer diferente la próxima vez?", options: ["Respirar profundamente antes de hablar","Levantar la mano para participar","Esperar mi turno con calma","Escribir o dibujar lo que siento","Pedir ayuda con respeto","Guardar silencio y escuchar","Otro"] }
  ];

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const cuestionarioCompleto = questions.every((q) => answers[q.key] && answers[q.key] !== "");
  const actividadCompleta = textFeel.trim() !== "" || drawing !== null || emoji !== "";
  const compromisoCompleto = commitment.trim() !== "";

  const fichaTexto = `
*FICHA DE REFLEXIÓN - CBTIS 89*
🦉 Rincón del Búho
---------------------------
Situación: ${answers.situacion}
Emoción: ${answers.emocion}
Percepción: ${answers.otros}
Estrategia: ${answers.estrategia}
Reflexión: ${textFeel}
Compromiso: ${commitment}
---------------------------
Insignia: 🦉 Sabiduría del Búho
`;

  return (
    <div style={{ fontFamily: "Segoe UI, Arial", padding: "30px", maxWidth: "600px", margin: "auto", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
      
      {/* PASO 1: PORTADA */}
      {step === "portada" && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px" }}>🦉</h1>
          <h2>Rincón del Búho</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            El búho representa la sabiduría reflexiva y la visión panorámica.
            Este espacio es para pensar con calma, reconocer tus emociones y
            encontrar respuestas a lo que sientes.
          </p>
          <button style={buttonStyle} onClick={() => setStep("cuestionario")}>
            Comenzar mi reflexión
          </button>
        </div>
      )}

      {/* PASO 2: CUESTIONARIO */}
      {step === "cuestionario" && (
        <div>
          <h2 style={{ borderBottom: "2px solid #87CEEB", paddingBottom: "10px" }}>Cuestionario de reflexión</h2>
          {questions.map((q) => (
            <div key={q.key} style={{ marginBottom: "20px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{q.text}</p>
              <select
                style={{ padding: "10px", fontSize: "14px", width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
                value={answers[q.key] || ""}
                onChange={(e) => handleAnswer(q.key, e.target.value)}
              >
                <option value="">Selecciona una opción...</option>
                {q.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
          <button
            style={{ ...buttonStyle, opacity: cuestionarioCompleto ? 1 : 0.5 }}
            disabled={!cuestionarioCompleto}
            onClick={() => setStep("actividad")}
          >
            Siguiente: Actividad ➡️
          </button>
        </div>
      )}

      {/* PASO 3: ACTIVIDAD REFLEXIVA */}
      {step === "actividad" && (
        <div>
          <h2>Actividad reflexiva</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <h3>✍️ ¿Cómo te sientes ahora?</h3>
            <textarea
              style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
              rows={4}
              placeholder="Escribe aquí tus pensamientos..."
              value={textFeel}
              onChange={(e) => setTextFeel(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>🎨 Sube un dibujo o mandala</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setDrawing(e.target.files[0]?.name ?? null)}
            />
            {drawing && <p style={{ color: "green", fontSize: "12px" }}>✅ Archivo seleccionado: {drawing}</p>}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>🖼️ Selecciona un emoji</h3>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              {["😀", "😢", "😡", "😌", "🤔"].map((emo) => (
                <button
                  key={emo}
                  style={{ fontSize: "24px", padding: "10px", border: emoji === emo ? "2px solid #87CEEB" : "1px solid #ccc", borderRadius: "10px", background: "none", cursor: "pointer" }}
                  onClick={() => setEmoji(emo)}
                >
                  {emo}
                </button>
              ))}
            </div>
          </div>

          <button
            style={{ ...buttonStyle, opacity: actividadCompleta ? 1 : 0.5 }}
            disabled={!actividadCompleta}
            onClick={() => setStep("compromiso")}
          >
            Siguiente: Compromiso ➡️
          </button>
        </div>
      )}

      {/* PASO 4: COMPROMISO */}
      {step === "compromiso" && (
        <div style={{ textAlign: "center" }}>
          <h2>🤝 Mi Microcompromiso</h2>
          <p>Escribe algo pequeño que puedas hacer para mejorar la próxima vez:</p>
          <textarea
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "20px" }}
            rows={3}
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
          />
          <button
            style={{ ...buttonStyle, opacity: compromisoCompleto ? 1 : 0.5 }}
            disabled={!compromisoCompleto}
            onClick={() => setStep("insignia")}
          >
            Obtener mi Insignia 🏅
          </button>
        </div>
      )}

      {/* PASO 5: INSIGNIA */}
      {step === "insignia" && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2 style={{ color: "#FFD700" }}>🏅 ¡Felicidades!</h2>
          <p>Has completado tu proceso de reflexión con éxito.</p>
          <div style={{ fontSize: "80px", margin: "20px 0" }}>🦉</div>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Insignia: Sabiduría del Búho</p>
          <button style={buttonStyle} onClick={() => setStep("ficha")}>
            Generar Ficha Final 📄
          </button>
        </div>
      )}

      {/* PASO 6: FICHA FINAL */}
      {step === "ficha" && (
        <div style={{ border: "2px solid #333", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>FICHA DE ORIENTACIÓN</h2>
          <p><strong>Situación:</strong> {answers.situacion}</p>
          <p><strong>Emoción:</strong> {answers.emocion}</p>
          <p><strong>Reflexión:</strong> {textFeel}</p>
          <p><strong>Emoji:</strong> {emoji}</p>
          <p><strong>Compromiso:</strong> {commitment}</p>
          <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>🦉 Insignia de Sabiduría Obtenida</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(fichaTexto)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...buttonStyle, backgroundColor: "#25D366", textAlign: "center", textDecoration: "none" }}
            >
              📲 Enviar por WhatsApp
            </a>
            <button style={{ ...buttonStyle, backgroundColor: "#444" }} onClick={onBack}>
              🔙 Volver al Menú Principal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buho;