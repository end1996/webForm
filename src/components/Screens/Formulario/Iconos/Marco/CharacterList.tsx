// Componente para mostrar la lista de personajes
import { useCharacters } from "../../../../../hooks/UseCharacters";
import CharacterCard from "./CharacterCard";
import { CharacterProps } from "./CharacterCard";

const CharacterList = () => {
    // Obtiene los datos de los personajes usando el hook personalizado
    const { data, error, isLoading} = useCharacters();

    if (isLoading) return <p>Cargando personajes</p>
    if (error) return <p>Error al cargar los personajes</p>

    // Cast data to CharacterProps array
    const characters = data as CharacterProps[];

    return (
        <div className="character-list">
            {/* Mapea los personajes y los muestra en tarjetas */}
            {characters.map( ( char: CharacterProps ) => (
                <CharacterCard 
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    image={char.image}>
                </CharacterCard>
            ))}
        </div>
    )
}

export default CharacterList;
