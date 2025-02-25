// Componente para mostrar cada personaje
export type CharacterProps = {
    id: number;
    name: string;
    image: string;
};

const CharacterCard = ({ name, image }: CharacterProps) => {
    return (
        <div className="character-card">
            {/* Muestra la imagen del personaje */}
            <img src={image} alt={name}></img>
            {/* Muestra el nombre del personaje */}
            <h3>{name}</h3>
        </div>
    );
};

export default CharacterCard;