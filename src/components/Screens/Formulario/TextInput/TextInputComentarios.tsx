import { useState, useEffect } from "react";
import styles from "./TextInputComentarios.module.css";

const TextInputComentarios: React.FC = () => {
    const [comentario, setComentario] = useState<string>("");
    const [comentarios, setComentarios] = useState<string[]>(() => {
        const datosGuardados = localStorage.getItem("comentarios");
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    });

    const [mensaje, setMensaje] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }, [comentarios]);

    const manejarCambio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComentario(e.target.value);
    };

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        if (comentario.trim() !== "") {
            setComentarios([...comentarios, comentario]);
            setComentario("");
            setMensaje("✅ Comentario guardado exitosamente");

            console.log("Comentario guardado:", comentario); // Muestra en la consola

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                setMensaje("");
            }, 3000);
        }
    };

    return (
        <div className={styles.inputContainer}>
            <h2 className={styles.textTitle}>COMENTARIOS ADICIONALES</h2>
            <textarea
                className={styles.textInput}
                placeholder="Escribe aquí tus comentarios..."
                value={comentario}
                onChange={manejarCambio}
            ></textarea>
            <div className={styles.buttonContainer}>
                <button className={styles.buttonSubmit} onClick={manejarEnvio}>
                    Grabar Comentario
                </button>
                {mensaje && <span className={styles.message}>{mensaje}</span>}
            </div>
        </div>
    );
};

export default TextInputComentarios;