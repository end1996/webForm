import styles from './Dimensiones.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

function Dimensiones() {
    return (
        <>
            <div>
                <p className={styles.textTitle}>Dimensiones</p>
                <p className={styles.textTitle}>Orientación</p>
            </div>
            <div className={styles.dimensionesContainer}>
                <button className={styles.orientationButton}>
                    <FontAwesomeIcon icon={faArrowsLeftRight} />Horizontal</button>
                <button className={styles.orientationButton}>
                    <FontAwesomeIcon icon={faArrowsUpDown} />Vertical</button>
            </div>
        </>
    );
}

export default Dimensiones;