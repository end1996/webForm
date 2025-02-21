import styles from './BotonesEnmarcado.module.css';

interface BotonesEnmarcadoProps {
    selectedButton: string;
    onButtonClick: (buttonName: string) => void;
}

function BotonesEnmarcado({selectedButton, onButtonClick }: BotonesEnmarcadoProps) {
    return (
        <div className={styles.botonEnmarcadoContainer}>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'soloImpresion' ? styles.selected : ''}`}
                onClick={() => onButtonClick('soloImpresion')}
            >
                Sólo Impresión
            </button>
            <button
                className={`${styles.botonEnmarcado} ${selectedButton === 'enmarcacionImpresion' ? styles.selected : ''}`}
                onClick={() => onButtonClick('enmarcacionImpresion')}
            >
                Enmarcación + Impresión
            </button>
        </div>
    );
}

export default BotonesEnmarcado;