import { useMarcos } from "../../../../../hooks/UseMarcos";
import { MarcoProps } from "./MarcoCard";
import MarcoCard from "./MarcoCard";
import styles from "./MarcosView.module.css"

interface MarcosListProps {
    selectedMarco: string;
    estado: boolean;
    onMarcoClick: (marcoName: string) => void;
}

const MarcosList = ({ selectedMarco, onMarcoClick }: MarcosListProps) => {
    const { data, error, isLoading } = useMarcos();

    if (isLoading) return <p>Cargando marcos...</p>;
    if (error) return <p>Error al cargar los marcos</p>;

    // Verifica que data sea un array
    const marcos = Array.isArray(data) ? data.filter(d => d.estado) as MarcoProps[] : [];

    return (
        <div className={styles.marcosViewContainer}>
            {marcos.map((marco: MarcoProps) => (
                <MarcoCard
                    key={marco.id}
                    id={marco.id}
                    nombre={marco.nombre}
                    selectedMarco={selectedMarco}
                    onMarcoClick={onMarcoClick}
                    estado={marco.estado}
                />
            ))}
        </div>
    );
};

export default MarcosList;