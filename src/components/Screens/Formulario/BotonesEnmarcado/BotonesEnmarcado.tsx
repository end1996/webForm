import { useState } from 'react';
import styles from './BotonesEnmarcado.module.css';

function BotonesEnmarcado() {
    const [selectedButton, setSelectedButton] = useState<string | null>('enmarcacionImpresion'); // 'enmarcacionImpresion' por defecto

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className={styles.botonEnmarcadoContainer}>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'soloImpresion' ? styles.selected : ''}`}
                onClick={() => handleButtonClick('soloImpresion')}
            >
                Sólo Impresión
            </button>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'enmarcacionImpresion' ? styles.selected : ''}`}
                onClick={() => handleButtonClick('enmarcacionImpresion')}
            >
                Enmarcación + Impresión
            </button>
        </div>
    );
}

export default BotonesEnmarcado;