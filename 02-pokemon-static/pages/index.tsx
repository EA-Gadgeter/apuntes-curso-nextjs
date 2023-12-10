import type { NextPage } from "next";

import { Button } from "@nextui-org/react";

import { MainLayout } from "@/layouts/MainLayout";

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Listado de Pokemons - Pokemon App">
      <Button>
        Hola mundo
      </Button>
    </MainLayout>
  );
};

export default HomePage;