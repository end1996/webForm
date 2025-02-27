import { Dimension as BaseDimension } from "../../../../api/dimensionesApi";
import styles from './Tamanios.module.css';

export interface Dimension extends BaseDimension {
    handleGridElement: (gridElementId: string) => void;
    selectedGridButton: string;
}

const TamanioButton = ({ id, alto, largo, handleGridElement, selectedGridButton }: Dimension) => {
    const dimensiones = `${alto} X ${largo}`;

    return (
        <button
            className={`${styles.gridButton} ${selectedGridButton === String(id) ? styles.selected : ''}`}
            onClick={() => handleGridElement(dimensiones)}
        >
            {dimensiones}
        </button>
    );
}

export default TamanioButton;