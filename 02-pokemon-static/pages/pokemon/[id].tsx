import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import type { Pokemon } from "@/interfaces/pokemon/pokemonFull";
import { getPokemonById } from "@/services/pokemon/getPokemonById";
import { TOTAL_POKEMONS } from "@/const";

import { MainLayout } from "@/layouts/MainLayout";

interface Props {
  pokemon: Pokemon;
}

const SinglePokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <MainLayout title={pokemon.name}>
      <h2>{pokemon.name}</h2>
    </MainLayout>
  );
};

/*
  getStaticPaths sirve para decirle a Next, CUANTAS paginas van a ser generadas
  y en BASE A QUE query param. Por lo que esta funcion solo DEBE ser usado en rutas dinamicas,
  como pokemon/[id].tsx, por ejemplo, y hasta marca error si no la usas...

  Esto generuna un pipeline por asi decirlo:
    1. getStaticPaths - Cuantas y como se va a sacar la info dinamica
    2. getStaticProps - Traemos la informacion necesaria para mandarla a las props
*/
export const getStaticPaths: GetStaticPaths = async () => {
  // Los 151 pokemons, osea un arreglo del [1...150]
  const totalPages = [...Array(TOTAL_POKEMONS)].map((__, index) => (
    {
      // TIENE QUE COINCIDIR CON EL NOMBRE DE LA RUTA DE LOS ARCHIVOS
      params: {
        id: `${index + 1}`
      }
    }
  ));

  return {
    paths: totalPages,
    // Indicamos el usuario pide algo no establecido, mandamos 404
    fallback: false
  };
};

// Por de pipeline me refiero a que, una vez establecidos los paths, getStaticProps
// obtiene obtiene el context, el param que le paso getStaticPaths, solo uno,
// entonces podemos destructurar los params del ctx

// Como le hace Next cual ruta es cual, o donde se pasa ese numero en especifo del path a la funcion?
// Es magia..., y esta bien eso
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Sacamos el id del pokemon, hacemos fetch de la info, y la mandamos a los props
  const { id } = params as { id: string };

  const data = await getPokemonById(id);

  return {
    props: {
      pokemon: data
    }
  };
};

export default SinglePokemonPage;