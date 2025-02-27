// Hook para obtener dimensiones
import {useQuery} from "@tanstack/react-query" // Importa el hook useQuery de la librería react-query
import { fetchDimensiones } from "../api/dimensionesApi"; // Importa la función fetchDimensiones desde el archivo dimensionesApi

export const useDimensiones = () => {
    return useQuery({
        queryKey: ["dimensiones"], // Nombre único en caché
        queryFn: fetchDimensiones, // Función que obtiene los datos
    });
};
