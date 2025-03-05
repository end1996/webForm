import useComentarioStore from "../../../../stores/comentario.store";
import styles from "./TextInputComentarios.module.css";

const TextInputComentarios: React.FC = () => {
    const {
        comentario,
        mensaje,
        setComentario,
        agregarComentario,
        setMensaje,
    } = useComentarioStore();

    const manejarCambio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComentario(e.target.value);
    };

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        agregarComentario();

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                setMensaje("");
            }, 3000);
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