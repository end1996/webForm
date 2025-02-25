import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/charactersApi";

export const useCharacters = () => {
  return useQuery({
    queryKey: ["characters"], // Nombre único en caché
    queryFn: fetchCharacters, // Función que obtiene los datos
  });
};
