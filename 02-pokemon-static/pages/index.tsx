import type { NextPage, GetStaticProps } from "next";

import type { SinglePokemon } from "@/interfaces/pokemon/pokemonList";
import { getAllPokemons } from "@/services/pokemon/getAllPokemons";
import { TOTAL_POKEMONS } from "@/const";

import { MainLayout } from "@/layouts/MainLayout";
import { PokemonGrid } from "@/components/pokemon/PokemonGrid";

interface Props {
  pokemons: SinglePokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <MainLayout title="Listado de Pokemons - Pokemon App">
      <PokemonGrid pokemons={pokemons} />
    </MainLayout>
  );
};

// Funcion que permite jalar informacion que se usara
// para generar paginas estaticas: SUCEDE EN BUILD TIME en el servidor
// osea que aqui podria hacer cualquier cosa de node, como fs

// Aqui la magia es que la funcion se tiene que llamar getStaticProps
// y la tengo que exportar, y ya con eso Next se encarga de hacer la peticion,
// y mandar los datos en las "props" arriba al componente
export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPokemons(TOTAL_POKEMONS);

  const pokemonData: SinglePokemon[] = data.map((pokemon, index) => {
    const id = index + 1;

    return {
      ...pokemon,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  return {
    props: {
      pokemons: pokemonData
    }
  };
};

export default HomePage;