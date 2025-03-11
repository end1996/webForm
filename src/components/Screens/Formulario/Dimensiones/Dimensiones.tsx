import styles from './Dimensiones.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from 'react-bootstrap';
import { useOrientationStore } from '../../../../stores/orientations.store';
import { useCounterStore } from '../../../../stores/counter.store';

function Dimensiones() {

  const { orientation, setOrientation } = useOrientationStore(); // Usamos el store global de Zustand

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
        <div className={styles.gridCounter}>
          <CardCounter />
        </div>
      </div>
    </div>
  );
}

export default Dimensiones;

export const CardCounter = () => {
  const increaseCounter = useCounterStore(state => state.increaseCounter);
  const countValue = useCounterStore(state => state.count);
  const setCounter = useCounterStore((state) => state.setCounter);

  return (
    <>
      <button
        className={styles.buttonCounter}
        style={{ backgroundColor: "#44A0AA" }}
        onClick={() => `${countValue ? increaseCounter(-1) : ''}`}
      >-</button>
      <Card style={{ height: "46px", width: "70px", justifyContent: "center", alignItems: "center", fontWeight: "600" }}>
        <CardBody>
          <input
            type="text"
            value={countValue}
            max={100}
            onChange={(e) => setCounter(e.target.value)}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontWeight: "inherit",
              border: "none",
              background: "transparent",
              outline: "none",
            }}
          />
        </CardBody>
      </Card>
      <button
        className={styles.buttonCounter}
        onClick={() => increaseCounter(+1)}
      >+</button>
    </>
  )
}