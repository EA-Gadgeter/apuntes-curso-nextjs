import type { Pokemon } from "@/interfaces/pokemon/pokemonFull";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`${API_URL}/pokemon/${id}`);
  return await response.json() as Pokemon;
};