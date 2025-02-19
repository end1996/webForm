import { useState } from 'react';
import styles from './BotonesEnmarcado.module.css';

function BotonesEnmarcado() {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className={styles.botonEnmarcadoContainer}>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'soloImpresion' ? styles.selected : ''}`}
                onClick={() => handleButtonClick('soloImpresion')}
            >
                SÓLO IMPRESIÓN
            </button>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'enmarcacionImpresion' ? styles.selected : ''}`}
                onClick={() => handleButtonClick('enmarcacionImpresion')}
            >
                ENMARCACIÓN + IMPRESIÓN
            </button>
        </div>
    );
}

export default BotonesEnmarcado;