import { useState } from 'react';
import styles from './Dimensiones.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

function Dimensiones() {
  const [selectedOrientation, setSelectedOrientation] = useState<string | null>(null);

  const handleOrientationClick = (orientation: string) => {
    setSelectedOrientation(orientation);
  };

  return (
    <>
      <div>
        <p className={styles.textTitle}>Orientación</p>
      </div>
      <div className={styles.dimensionesContainer}>
        <button
          className={`${styles.orientationButton} ${selectedOrientation === 'horizontal' ? styles.selected : ''}`}
          onClick={() => handleOrientationClick('horizontal')}
        >
          <FontAwesomeIcon icon={faArrowsLeftRight} /> Horizontal
        </button>
        <button
          className={`${styles.orientationButton} ${selectedOrientation === 'vertical' ? styles.selected : ''}`}
          onClick={() => handleOrientationClick('vertical')}
        >
          <FontAwesomeIcon icon={faArrowsUpDown} /> Vertical
        </button>
      </div>
    </>
  );
}

export default Dimensiones;