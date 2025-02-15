import styles from './BotonesEnmarcado.module.css';

function BotonesEnmarcado() {
    return (
        <div className={styles.botonEnmarcadoContainer}>
            <button className={styles.botonEnmarcado}>SÓLO ENMARCACIÓN</button>
            <button className={styles.botonEnmarcado}>ENMARCACIÓN + IMPRESIÓN</button>
        </div>
    );
}

export default BotonesEnmarcado;