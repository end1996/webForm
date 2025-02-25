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
    <>
      <div>
        <p className={styles.textTitle}>Orientación</p>
      </div>
      <div className={styles.dimensionesContainer}>
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
    </>
  );
}

export default Dimensiones;