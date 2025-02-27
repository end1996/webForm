import { Dimension as BaseDimension } from "../../../../api/dimensionesApi"
import styles from './Tamanios.module.css'

export interface Dimension extends BaseDimension {
    handleGridElement: (gridElement: string) => void;
    selectedGridButton: string;
}

const TamanioCard = ({ alto, largo, handleGridElement, selectedGridButton }: Dimension) => {

    const dimensiones = `${alto} X ${largo}`;
    return (
        <button
            className={`${styles.gridButton} ${selectedGridButton === dimensiones ? styles.selected : ''}`}
            onClick={() => handleGridElement(`${dimensiones}`)}
        >
            {dimensiones}
        </button>
    )

}

export default TamanioCard;