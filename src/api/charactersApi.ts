import apiClient from "./apiClient";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharactersResponse {
  items: Character[];
}

export const fetchCharacters = async (): Promise<Character[]> => {
  const { data } = await apiClient.get<CharactersResponse>("/characters");
  return data.items;
};
