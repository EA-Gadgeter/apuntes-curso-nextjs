import { FC } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { Card, CardBody, CardFooter } from "@nextui-org/react";

import type { SinglePokemon } from "@/interfaces/pokemon/pokemonList";

interface Props {
  pokemon: SinglePokemon;
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      fullWidth
      onClick={handleClick}
    >
      <CardBody className="p-1">
        <Image
          className="w-full max-h-full block"
          src={pokemon.img}
          alt={`#${pokemon.id} - ${pokemon.name}`}
          width={140}
          height={140}
        />
      </CardBody>

      <CardFooter className="flex justify-between capitalize">
        <p>{pokemon.name}</p>
        <p>#{pokemon.id}</p>
      </CardFooter>
    </Card>
  );
};