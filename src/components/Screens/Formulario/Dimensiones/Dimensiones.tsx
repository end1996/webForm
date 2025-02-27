import { useContext } from 'react';
import styles from './Dimensiones.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { OrientationContext } from '../../../../context/OrientationContext';

function Dimensiones() {
  const { orientation, setOrientation } = useContext(OrientationContext);

  const handleOrientationClick = (newOrientation: string) => {
    setOrientation(newOrientation);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dimensionesContainer}>
        <p className={styles.textTitle}>Orientación</p>
        <div className={styles.orientationContainer}>
          <button
            className={`${styles.orientationButton} ${orientation === 'horizontal' ? styles.selected : ''}`}
            onClick={() => handleOrientationClick('horizontal')}
          >
            <FontAwesomeIcon icon={faArrowsLeftRight} /> Horizontal
          </button>
          <button
            className={`${styles.orientationButton} ${orientation === 'vertical' ? styles.selected : ''}`}
            onClick={() => handleOrientationClick('vertical')}
          >
            <FontAwesomeIcon icon={faArrowsUpDown} /> Vertical
          </button>
        </div>
      </div>
      <div className={styles.cantidad}>
        <p className={styles.textTitle}>Cantidad</p>
        <input type='number' className={styles.inputCantidad}></input>
      </div>
    </div>
  );
}

export default Dimensiones;