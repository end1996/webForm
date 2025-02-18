import styles from './AgregarAlCarro.module.css';

function agregarAlCarro() {
    return (
        <div className={styles.agregarAlCarroContainer}>
            <button className={styles.buttonAgregar}>Agregar al carro</button>
        </div>
    );
}

export default agregarAlCarro;