//import { useState } from 'react';
import styles from './TextInputComentarios.module.css';

function TextInputContainer() {

    return (
        <>
            <div className={styles.inputContainer}>
                <h2 className={styles.textTitle}>COMENTARIOS ADICIONALES</h2>
                <textarea className={styles.textInput} placeholder="Escribe aquí tus comentarios..."></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.buttonSubmit}>Grabar Comentario</button>
            </div>
        </>
    );
}

export default TextInputContainer;