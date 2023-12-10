import type { PokemonListResponse } from "@/interfaces/pokemon/pokemonList";

const API_URL = "https://pokeapi.co/api/v2";

export const getAllPokemons = async (limit = 0) => {
  const response = await fetch(`${API_URL}/pokemon?limit=${limit}`);
  const { results } = await response.json() as PokemonListResponse;
  return results;
};