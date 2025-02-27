import { Dimension as BaseDimension } from "../../../../api/dimensionesApi"
import { useDimensiones } from "../../../../hooks/useDimensiones";
import styles from './Tamanios.module.css'

interface Dimension extends BaseDimension {
    handleGridElement: (gridElement: string) => void;
    selectedGridButton: string;
}

const TamanioCard = ({ alto, largo, handleGridElement, selectedGridButton }: Dimension) => {

     const { data, error, isLoading } = useDimensiones();
    
        if (isLoading) return <p>Cargando marcos...</p>;
        if (error) return <p>Error al cargar los marcos</p>;
    
        // Verifica que data sea un array
        const objeto = Array.isArray(data) ? data as Dimension[] : [];
    
    const dimensiones = [`${alto} X ${largo}`]; // Ejemplo de cómo podrías usar alto y largo para crear dimensiones
    return (
        <div className={styles.gridDimensiones}>
            {dimensiones.map((dimension) => (
                <button key={dimension} className={`${styles.gridButton} ${selectedGridButton === dimension ? styles.selected : ''}`}
                    onClick={() => handleGridElement(dimension)}
                >
                    {dimension}
                </button>
            ))}
        </div>
    )

}

export default TamanioCard;