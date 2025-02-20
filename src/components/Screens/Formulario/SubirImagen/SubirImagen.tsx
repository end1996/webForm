import styles from './SubirImagen.module.css';

function subirImagen() {
    return (
        <div className='mt-3'>
            <p className={styles.textTitle}>Imágen para imprimir</p>
            <div className={styles.uploadContainer}>
                <button className={styles.buttonUpload}>Subir imágen</button>
            </div>
        </div>
    );
}

export default subirImagen;