import { useDimensiones } from '../../../../hooks/useDimensiones';
import TamanioCard, { Dimension } from './TamanioButton'
import styles from './Tamanios.module.css'

interface TamanioGridProps {
    selectedGridButton: string;
    handleGridElement: (gridButtonName: string) => void;
    tipo_medida: boolean;
}

export const TamanioGrid: React.FC<TamanioGridProps> = ({ selectedGridButton, handleGridElement, tipo_medida }) => {
    const { data, error, isLoading } = useDimensiones();

    if (isLoading) return <p>Cargando dimensiones...</p>;
    if (error) return <p>Error al cargar las dimensiones</p>;

    // Verifica que data sea un array filtrado por tipo de medida
    const dimensiones = Array.isArray(data) ? data.filter(d => d.tipo_medida === tipo_medida) as Dimension[] : [];
    return (
        <div className={styles.gridDimensiones}>
            
            {dimensiones.map((dimensiones: Dimension) => (
                <TamanioCard
                    key={dimensiones.id}
                    id={dimensiones.id}
                    alto={dimensiones.alto}
                    largo={dimensiones.largo}
                    tipo_medida={dimensiones.tipo_medida}
                    selectedGridButton={selectedGridButton}
                    handleGridElement={handleGridElement}
                />

            ))}
        </div>
    )
}
