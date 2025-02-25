// Hook para obtener personajes
import {useQuery} from "@tanstack/react-query" // Importa el hook useQuery de la librería react-query
import { fetchCharacters } from "../api/charactersApi"; // Importa la función fetchCharacters desde el archivo charactersApi

export const useCharacters = () => {
    return useQuery({
        queryKey: ["characters"], // Nombre único en caché
        queryFn: fetchCharacters, // Función que obtiene los datos
    });
};
