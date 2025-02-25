import apiClient from "./apiClient";

export const fetchCharacters = async () => {
  const { data } = await apiClient.get("/characters");
  return data // La API devuelve un objeto con "items"
};
