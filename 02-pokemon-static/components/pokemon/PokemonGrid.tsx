import { FC } from "react";

import {SinglePokemon} from "@/interfaces/pokemon/pokemonList";

import { PokemonCard } from "@/components/pokemon/PokemonCard";


interface Props {
  pokemons: SinglePokemon[];
}

export const PokemonGrid:FC<Props> = ({pokemons}) => {
  return (
    <ul
      className="
          grid gap-3 justify-start
          grid-cols-2 md:grid-cols-3
          lg:grid-cols-6 xl:grid-cols-10
        "
    >
      {
        pokemons.map(pokemon  => (
          <li key={pokemon.id}>
            <PokemonCard  pokemon={pokemon} />
          </li>
        ))
      }
    </ul>
  );
};