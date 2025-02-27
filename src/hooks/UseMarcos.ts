// Hook para obtener marcos
import {useQuery} from "@tanstack/react-query" // Importa el hook useQuery de la librería react-query
import { fetchMarcos } from "../api/marcosApi"; // Importa la función fetchMarcos desde el archivo marcosApi

export const useMarcos = () => {
    return useQuery({
        queryKey: ["marcos"], // Nombre único en caché
        queryFn: fetchMarcos, // Función que obtiene los datos
    });
};
