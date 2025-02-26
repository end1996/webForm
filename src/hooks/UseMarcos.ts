// Hook para obtener personajes
import {useQuery} from "@tanstack/react-query" // Importa el hook useQuery de la librería react-query
import { fetchMarcos } from "../api/marcosApi"; // Importa la función fetchCharacters desde el archivo charactersApi

export const useMarcos = () => {
    return useQuery({
        queryKey: ["marcos"], // Nombre único en caché
        queryFn: fetchMarcos, // Función que obtiene los datos
    });
};
