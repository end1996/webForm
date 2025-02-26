// Peticiones a la API de personajes
import apiClient from "./apiClient";

export const fetchMarcos = async () => {
    // Realiza una solicitud GET a la API para obtener los personajes
    const {data} = await apiClient.get("/marcos");
    return data; // La API devuelve un objeto con "items"
}
