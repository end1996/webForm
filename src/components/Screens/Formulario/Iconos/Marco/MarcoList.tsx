import { useCharacters } from "../../../../../hooks/UseCharacters";
import { CharacterProps } from "./CharacterCard";
import MarcoCard from "./MarcoCard";

interface MarcosListProps {
    selectedMarco: string;
    onMarcoClick: (marcoName: string) => void;
}

const MarcosList = ({ selectedMarco, onMarcoClick }: MarcosListProps) => {
    const { data, error, isLoading } = useCharacters();

    if (isLoading) return <p>Cargando personajes...</p>;
    if (error) return <p>Error al cargar los personajes</p>;

    // Verifica que data sea un array
    const characters = Array.isArray(data) ? data as CharacterProps[] : [];

    return (
        <div className="character-list">
            {characters.map((char: CharacterProps) => (
                <MarcoCard
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    image={char.image}
                    selectedMarco={selectedMarco}
                    onMarcoClick={onMarcoClick}
                />
            ))}
        </div>
    );
};

export default MarcosList;